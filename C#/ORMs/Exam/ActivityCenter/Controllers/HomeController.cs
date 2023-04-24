﻿// Using statements
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ActivityCenter.Models;
using Microsoft.EntityFrameworkCore;

namespace ActivityCenter.Controllers;
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


//////////////////////////////////////////////////////!LOGIN/REG//////////////////////////////////////////////////////////////////////////

    [HttpGet("/")]
    public IActionResult Index()
    {
        return View("Index");
    }

//////////////////////////////////////////////////////!LOGIN/REG//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!DASHBOARD//////////////////////////////////////////////////////////////////////////

    [SessionCheck]
    [HttpGet("/activities/show")]
    public IActionResult ShowAllActivities()
    {
        // Now any time we want to access our database we use _context
        MyViewModel MyModel = new MyViewModel
        {
            AllActivities = _context.Activities.Include(u => u.User).Include(a => a.AllUsers).ThenInclude(c => c.User).ToList()
        };

        return View("ShowAllActivities", MyModel);
    }

//////////////////////////////////////////////////////!DASHBOARD//////////////////////////////////////////////////////////////////////////


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
        return View(new ErrorViewModel { RequestId = System.Diagnostics.Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }

//////////////////////////////////////////////////////!ERRORS//////////////////////////////////////////////////////////////////////////


}