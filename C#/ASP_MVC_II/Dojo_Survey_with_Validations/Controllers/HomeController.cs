using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Dojo_Survey.Models;

namespace Dojo_Survey.Controllers;

public class HomeController : Controller
{
    static User newUser;

    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    [HttpGet("/")]
    public IActionResult Index()
    {
        return View();
    }

    [HttpGet("/privacy")]
    public IActionResult Privacy()
    {
        return View();
    }

    [HttpGet("/users")]
    public IActionResult Users() {
        List<string> UsersList = new List<string>() {
            "Tyler", "Andres", "Kris", "Kate"
        };

        ViewBag.UserIds = UsersList;
        return View("Users");
    }

    [HttpGet("/contacts")]
    public IActionResult Contacts() {
        return View("Contacts");
    }

    [HttpGet("/users/form")]
    public IActionResult DojoForm() {
        return View("DojoForm");
    }

    [HttpGet("/results")]
    public IActionResult Results() {
        return View("Results", newUser);
    }

    [HttpPost("/process")]
    public IActionResult AddUser(User users) {

        if (!ModelState.IsValid) {
            return View("DojoForm");
        }

        Console.WriteLine($"My first name is: {users.FirstName}");
        Console.WriteLine($"My last name is: {users.LastName}");
        Console.WriteLine($"My Dojo is: {users.Dojo}");
        Console.WriteLine($"My favorite language is: {users.Language}");
        Console.WriteLine($"My comment is: {users.Message}");

        newUser = users;

        return RedirectToAction("Results");
    }

    [HttpGet("{**path}")]
    public IActionResult Unknown() {
        System.Console.WriteLine("It is working!!");
        return View("404");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
