// Using statements
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Products_and_Categories.Models;
using Microsoft.EntityFrameworkCore;

namespace Products_and_Categories.Controllers;
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


//////////////////////////////////////////////////////!LOGIN/REG DASHBOARD//////////////////////////////////////////////////////////////////////////

    [HttpGet("/")]
    public IActionResult Index()
    {
        return View("Index");
    }

//////////////////////////////////////////////////////!LOGIN/REG DASHBOARD//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!PRODUCTS AND CATEGORIES DASHBOARD//////////////////////////////////////////////////////////////////////////

    [SessionCheck]
    [HttpGet("/products/show")]
    public IActionResult ShowAllProducts()
    {
        // Now any time we want to access our database we use _context
        MyViewModel MyModel = new MyViewModel
        {
            AllItems = _context.Items.Include(u => u.User).Include(a => a.AllCategories).ThenInclude(c => c.Category).ToList()
        };

        return View("ShowAllProducts", MyModel);
    }

//////////////////////////////////////////////////////!PRODUCTS AND CATEGORIES DASHBOARD//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!USERS DASHBOARD//////////////////////////////////////////////////////////////////////////

    [SessionCheck]
    [HttpGet("/users/show")]
    public IActionResult ShowAllUsers()
    {
        // Now any time we want to access our database we use _context
        MyViewModel MyModel = new MyViewModel
        {
            AllUsers = _context.Users.Include(i => i.AllItems).ToList()
        };

        return View("ShowAllUsers", MyModel);
    }

//////////////////////////////////////////////////////!USERS DASHBOARD//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!CATEGORY DASHBOARD//////////////////////////////////////////////////////////////////////////

    [SessionCheck]
    [HttpGet("/category/show")]
    public IActionResult ShowAllCategories()
    {
        // Now any time we want to access our database we use _context
        MyViewModel MyModel = new MyViewModel
        {
            AllCategories = _context.Categories.Include(i => i.User).Include(a => a.AllProducts).ThenInclude(c => c.Item).ToList()
        };

        return View("ShowAllCategories", MyModel);
    }

//////////////////////////////////////////////////////!USERS DASHBOARD//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!404 PATH//////////////////////////////////////////////////////////////////////////

    [HttpGet("{**path}")]
    public IActionResult Unknown() {
        System.Console.WriteLine("It is working!!");
        return View("404");
    }

//////////////////////////////////////////////////////!404 PATH//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!ERRORS//////////////////////////////////////////////////////////////////////////

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }

//////////////////////////////////////////////////////!ERRORS//////////////////////////////////////////////////////////////////////////


}