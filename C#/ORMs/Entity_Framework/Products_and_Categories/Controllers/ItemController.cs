// Using statements
using Microsoft.AspNetCore.Mvc;
using Products_and_Categories.Models;
using Microsoft.EntityFrameworkCore;

namespace Products_and_Categories.Controllers;
public class ItemController : Controller
{
    private readonly ILogger<ItemController> _logger;

    // Add a private variable of type MyContext (or whatever you named your context file)
    private MyContext _context;

    // Here we can "inject" our context service into the constructor 
    // The "logger" was something that was already in our code, we're just adding around it
    public ItemController(ILogger<ItemController> logger, MyContext context)
    {
        _logger = logger;
        // When our CRUDController is instantiated, it will fill in _context with context
        // Remember that when context is initialized, it brings in everything we need from DbContext
        // which comes from Entity Framework Core
        _context = context;
    }


//////////////////////////////////////////////////////!CREATE//////////////////////////////////////////////////////////////////////////

    [HttpGet("/products/new")]
    public IActionResult NewItem()
    {
        return View("~/Views/CRUD/NewItem.cshtml");
    }

    [HttpPost("/products/create")]
    public IActionResult CreateItem(Item newItem)
    {
        newItem.UserId = (int) HttpContext.Session.GetInt32("UserId");
        if(!ModelState.IsValid)
        {
            return View("~/Views/CRUD/NewItem.cshtml", newItem);
        }
        // We can take the Item object created from a form submission
        // and pass the object through the .Add() method
        // Remember that _context is our database
        _context.Add(newItem);
        // OR _context.Items.Add(newItem); if we want to specify the table
        // EF Core will be able to figure out which table you meant based on the model
        // VERY IMPORTANT: save your changes at the end!
        _context.SaveChanges();

        return RedirectToAction("ShowAllProducts", "Home");
    }

    [HttpPost("/products/AddCategory")]
    public IActionResult AddCategory(ProductCategory newCategory)
    {
        if(!ModelState.IsValid)
        {
            return View("~/Views/CRUD/ShowItem.cshtml", newCategory);
        }

        List<ProductCategory> list = _context.ProductCategories.Where(p => p.ItemId == newCategory.ItemId && p.CategoryId == newCategory.CategoryId).ToList();

        if (list.Count > 0) {
            return RedirectToAction("ShowAllProducts", "Home");
        }
        // We can take the Category object created from a form submission
        // and pass the object through the .Add() method
        // Remember that _context is our database
        _context.Add(newCategory);
        // OR _context.Categories.Add(newCategory); if we want to specify the table
        // EF Core will be able to figure out which table you meant based on the model
        // VERY IMPORTANT: save your changes at the end!
        _context.SaveChanges();

        return RedirectToAction("ShowAllProducts", "Home");
    }

//////////////////////////////////////////////////////!CREATE//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!READ////////////////////////////////////////////////////////////////////////////

    [HttpGet("/products/{id}")]
    public IActionResult ShowItem(int id)
    {
        MyViewModel MyModel = new MyViewModel
        {
            Item = _context.Items.Include(u => u.User).Include(a => a.AllCategories).ThenInclude(c => c.Category).FirstOrDefault(a => a.ItemId == id)
        };

        List<Category> AllMyCategories = _context.Categories.ToList();
        ViewBag.AllCategories = AllMyCategories;
        ViewBag.ItemId = id;

        return View("~/Views/CRUD/ShowItem.cshtml", MyModel);
    }

//////////////////////////////////////////////////////!READ////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!UPDATE//////////////////////////////////////////////////////////////////////////

    [HttpGet("/products/{ItemId}/edit")]
    public IActionResult UpdateItem(int ItemId)
    {
        Item? ItemToEdit = _context.Items.FirstOrDefault(i => i.ItemId == ItemId);
        ViewBag.AllUsers = _context.Users.ToList();
        return View("~/Views/CRUD/UpdateItem.cshtml", ItemToEdit);
    }

    [HttpPost("/products/{ItemId}/update")]
    public IActionResult UpdateProduct(Item newItem, int ItemId)
    {
        // 2. Find the old version of the instance in your database
        Item? OldItem = _context.Items.FirstOrDefault(i => i.ItemId == ItemId);

        // 3. Verify that the new instance passes validations
        if(!ModelState.IsValid || OldItem == null)
        {
            // ViewBag.AllUsers = _context.Users.ToList();
            // 3.5. If it does not pass validations, show error messages
            // Be sure to pass the form back in so you don't lose your changes
            // It should be the old version so we can keep the ID
            // return View("~/Views/CRUD/UpdateItem.cshtml", OldItem);
            return UpdateItem(OldItem.ItemId);
        }

        // 4. Overwrite the old version with the new version
        // Yes, this has to be done one attribute at a time
        OldItem.Name = newItem.Name;
        OldItem.UserId = newItem.UserId;
        OldItem.Price = newItem.Price;
        OldItem.Description = newItem.Description;

        // You updated it, so update the UpdatedAt field!
        OldItem.UpdatedAt = DateTime.Now;

        // 5. Save your changes
        _context.SaveChanges();

        // 6. Redirect to an appropriate page
        return RedirectToAction("ShowAllProducts", "Home");
    }

//////////////////////////////////////////////////////!UPDATE//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!DELETE//////////////////////////////////////////////////////////////////////////

    [HttpPost("/products/{ItemId}/destroy")]
    public IActionResult DestroyItem(int ItemId)
    {
        Item? ItemToDelete = _context.Items.SingleOrDefault(i => i.ItemId == ItemId);
        if (ItemToDelete == null || ItemToDelete.UserId != HttpContext.Session.GetInt32("UserId"))
        {
            return RedirectToAction("~/Views/CRUD/ShowItem.cshtml");
        }

        _context.Items.Remove(ItemToDelete);
        _context.SaveChanges();
        return RedirectToAction("ShowAllProducts", "Home");
    }

//////////////////////////////////////////////////////!DELETE//////////////////////////////////////////////////////////////////////////

}