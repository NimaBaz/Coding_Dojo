// Using statements
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using CRUDelicious.Models;
namespace YourProjectName.Controllers;
public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    // Add a private variable of type MyContext (or whatever you named your context file)
    private MyContext _context;

    // Here we can "inject" our context service into the constructor 
    // The "logger" was something that was already in our code, we're just adding around it
    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;
        // When our HomeController is instantiated, it will fill in _context with context
        // Remember that when context is initialized, it brings in everything we need from DbContext
        // which comes from Entity Framework Core
        _context = context;
    }

    [HttpGet("/")]
    public IActionResult Index()
    {
        // Now any time we want to access our database we use _context
        List<Dish> AllDishes = _context.Dishes.ToList();
        ViewBag.AllDishes = AllDishes;
        return View("Index");
    }


//////////////////////////////////////////////////////!CREATE//////////////////////////////////////////////////////////////////////////

    [HttpGet("dishes/new")]
    public IActionResult NewItem()
    {
        return View("NewItem");
    }

    [HttpPost("dishes/create")]
    public IActionResult CreateDish(Dish newDish)
    {    
        if(!ModelState.IsValid)
        {
            return View("NewItem", newDish);
        } 
        // We can take the Dish object created from a form submission
        // and pass the object through the .Add() method
        // Remember that _context is our database
        _context.Add(newDish);
        // OR _context.Dishes.Add(newDish); if we want to specify the table
        // EF Core will be able to figure out which table you meant based on the model
        // VERY IMPORTANT: save your changes at the end!
        _context.SaveChanges();
        return RedirectToAction("Index");
    }

//////////////////////////////////////////////////////!CREATE//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!READ////////////////////////////////////////////////////////////////////////////

    [HttpGet("dishes/{id}")]
    public IActionResult ShowItem(int id)
    {
        Dish? OneDish = _context.Dishes.FirstOrDefault(a => a.DishId == id);
        return View("ShowItem", OneDish);
    }

//////////////////////////////////////////////////////!READ////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!UPDATE//////////////////////////////////////////////////////////////////////////

    [HttpGet("dishes/{DishId}/edit")]
    public IActionResult UpdateItem(int DishId)
    {
        Dish? DishToEdit = _context.Dishes.FirstOrDefault(i => i.DishId == DishId);
        return View("UpdateItem", DishToEdit);
    }

    [HttpPost("dishes/{DishId}/update")]
    public IActionResult UpdateDish(Dish newDish, int DishId)
    {
        // 2. Find the old version of the instance in your database
        Dish? OldDish = _context.Dishes.FirstOrDefault(i => i.DishId == DishId);
        // 3. Verify that the new instance passes validations
        if(!ModelState.IsValid || OldDish == null)
        {
            // 3.5. If it does not pass validations, show error messages
            // Be sure to pass the form back in so you don't lose your changes
            // It should be the old version so we can keep the ID
            return View("UpdateItem", OldDish);
        }
        
        // 4. Overwrite the old version with the new version
        // Yes, this has to be done one attribute at a time
        OldDish.Name = newDish.Name;
        OldDish.Chef = newDish.Chef;
        OldDish.Tastiness = newDish.Tastiness;
        OldDish.Calories = newDish.Calories;
        OldDish.Description = newDish.Description;
        // You updated it, so update the UpdatedAt field!
        OldDish.UpdatedAt = DateTime.Now;
        // 5. Save your changes
        _context.SaveChanges();
        // 6. Redirect to an appropriate page
        return RedirectToAction("Index");
    }

//////////////////////////////////////////////////////!UPDATE//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!DELETE//////////////////////////////////////////////////////////////////////////

    [HttpPost("dishes/{DishId}/destroy")]
    public IActionResult DestroyDish(int DishId)
    {
        Dish? DishToDelete = _context.Dishes.SingleOrDefault(i => i.DishId == DishId);
        if (DishToDelete == null)
        {
            return RedirectToAction("ShowItem");
        }

        _context.Dishes.Remove(DishToDelete);
        _context.SaveChanges();
        return RedirectToAction("Index");
    }

//////////////////////////////////////////////////////!DELETE//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!ERRORS//////////////////////////////////////////////////////////////////////////

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }

//////////////////////////////////////////////////////!ERRORS//////////////////////////////////////////////////////////////////////////

}