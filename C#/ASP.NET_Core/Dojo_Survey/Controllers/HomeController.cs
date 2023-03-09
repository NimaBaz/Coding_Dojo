using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Dojo_Survey.Models;

namespace Dojo_Survey.Controllers;

public class HomeController : Controller
{
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

        if (TempData.ContainsKey("firstname")) {
            ViewBag.firstname = TempData["firstname"];
            ViewBag.lastname = TempData["lastname"];
            ViewBag.dojo = TempData["dojo"];
            ViewBag.language = TempData["language"];
            ViewBag.message = TempData["message"];
        }

        return View("Results");
    }

    [HttpPost("process")]
    public RedirectToActionResult AddUser(string FirstName, string LastName, string Dojo, string Language, string Message) {

        Console.WriteLine($"My first name is: {FirstName}");
        Console.WriteLine($"My last name is: {LastName}");
        Console.WriteLine($"My Dojo is: {Dojo}");
        Console.WriteLine($"My favorite language is: {Language}");
        Console.WriteLine($"My comment is: {Message}");

        TempData["firstname"] = FirstName;
        TempData["lastname"] = LastName;
        TempData["dojo"] = Dojo;
        TempData["language"] = Language;
        TempData["message"] = Message;

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
