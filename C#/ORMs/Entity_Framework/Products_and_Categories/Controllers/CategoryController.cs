// Using statements
using Microsoft.AspNetCore.Mvc;
using Products_and_Categories.Models;
using Microsoft.EntityFrameworkCore;

namespace Products_and_Categories.Controllers;
public class CategoryController : Controller
{
    private readonly ILogger<CategoryController> _logger;

    // Add a private variable of type MyContext (or whatever you named your context file)
    private MyContext _context;

    // Here we can "inject" our context service into the constructor 
    // The "logger" was something that was already in our code, we're just adding around it
    public CategoryController(ILogger<CategoryController> logger, MyContext context)
    {
        _logger = logger;
        // When our CRUDController is instantiated, it will fill in _context with context
        // Remember that when context is initialized, it brings in everything we need from DbContext
        // which comes from Entity Framework Core
        _context = context;
    }


//////////////////////////////////////////////////////!CREATE//////////////////////////////////////////////////////////////////////////

    [HttpGet("/category/new")]
    public IActionResult NewCategory()
    {
        return View("~/Views/CRUD/NewCategory.cshtml");
    }

    [HttpPost("/category/create")]
    public IActionResult CreateCategory(Category newCategory)
    {    
        newCategory.UserId = (int) HttpContext.Session.GetInt32("UserId");
        if(!ModelState.IsValid)
        {

            return View("~/Views/CRUD/NewCategory.cshtml", newCategory);
        }
        // We can take the Category object created from a form submission
        // and pass the object through the .Add() method
        // Remember that _context is our database
        _context.Add(newCategory);
        // OR _context.Categories.Add(newCategory); if we want to specify the table
        // EF Core will be able to figure out which table you meant based on the model
        // VERY IMPORTANT: save your changes at the end!
        _context.SaveChanges();

        return RedirectToAction("ShowAllCategories", "Home");
    }

    [HttpPost("/category/AddItem")]
    public IActionResult AddItem(ProductCategory newItem)
    {
        if(!ModelState.IsValid)
        {
            return View("~/Views/CRUD/ShowItem.cshtml", newItem);
        }

        List<ProductCategory> list = _context.ProductCategories.Where(p => p.CategoryId == newItem.CategoryId).Where(c => c.ItemId == newItem.ItemId).ToList();

        if (list.Count > 0) {
            return RedirectToAction("ShowAllCategories", "Home");
        }
        // We can take the Item object created from a form submission
        // and pass the object through the .Add() method
        // Remember that _context is our database
        _context.Add(newItem);
        // OR _context.Categories.Add(newItem); if we want to specify the table
        // EF Core will be able to figure out which table you meant based on the model
        // VERY IMPORTANT: save your changes at the end!
        _context.SaveChanges();

        return RedirectToAction("ShowAllCategories", "Home");
    }

//////////////////////////////////////////////////////!CREATE//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!READ////////////////////////////////////////////////////////////////////////////

    [HttpGet("/category/{id}")]
    public IActionResult ShowCategory(int id)
    {
        MyViewModel MyModel = new MyViewModel
        {
            Category = _context.Categories.Include(u => u.User).Include(a => a.AllProducts).ThenInclude(c => c.Item).FirstOrDefault(a => a.CategoryId == id)
        };

        List<Item> AllMyItems = _context.Items.ToList();
        ViewBag.AllItems = AllMyItems;
        ViewBag.CategoryId = id;

        return View("~/Views/CRUD/ShowCategory.cshtml", MyModel);
    }

//////////////////////////////////////////////////////!READ////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!UPDATE//////////////////////////////////////////////////////////////////////////

    [HttpGet("/category/{CategoryId}/edit")]
    public IActionResult EditCategory(int CategoryId)
    {
        Category? CategoryToEdit = _context.Categories.FirstOrDefault(i => i.CategoryId == CategoryId);
        ViewBag.AllUsers = _context.Users.ToList();
        return View("~/Views/CRUD/EditCategory.cshtml", CategoryToEdit);
    }

    [HttpPost("/category/{CategoryId}/update")]
    public IActionResult UpdateCategory(Category newCategory, int CategoryId)
    {
        // 2. Find the old version of the instance in your database
        Category? OldCategory = _context.Categories.FirstOrDefault(i => i.CategoryId == CategoryId);

        // 3. Verify that the new instance passes validations
        if(!ModelState.IsValid || OldCategory == null)
        {
            // ViewBag.AllUsers = _context.Users.ToList();
            // 3.5. If it does not pass validations, show error messages
            // Be sure to pass the form back in so you don't lose your changes
            // It should be the old version so we can keep the ID
            // return View("~/Views/CRUD/EditCategory.cshtml", OldCategory);
            return EditCategory(OldCategory.CategoryId);
        }

        // 4. Overwrite the old version with the new version
        // Yes, this has to be done one attribute at a time
        OldCategory.Name = newCategory.Name;

        // You updated it, so update the UpdatedAt field!
        OldCategory.UpdatedAt = DateTime.Now;

        // 5. Save your changes
        _context.SaveChanges();

        // 6. Redirect to an appropriate page
        return RedirectToAction("ShowAllCategories", "Home");
    }

//////////////////////////////////////////////////////!UPDATE//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!DELETE//////////////////////////////////////////////////////////////////////////

    [HttpPost("/category/{CategoryId}/DestroyCategory")]
    public IActionResult DestroyCategory(int CategoryId)
    {
        Category? CategoryToDelete = _context.Categories.SingleOrDefault(i => i.CategoryId == CategoryId);
        if (CategoryToDelete == null || CategoryToDelete.UserId != HttpContext.Session.GetInt32("UserId"))
        {
            return RedirectToAction("~/Views/CRUD/ShowCategory.cshtml");
        }

        _context.Categories.Remove(CategoryToDelete);
        _context.SaveChanges();
        return RedirectToAction("ShowAllCategories", "Home");
    }

//////////////////////////////////////////////////////!DELETE//////////////////////////////////////////////////////////////////////////

}