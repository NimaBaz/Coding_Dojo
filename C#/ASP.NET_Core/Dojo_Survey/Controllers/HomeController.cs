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

        if (TempData.ContainsKey("name")) {
            ViewBag.name = TempData["name"];
            ViewBag.dojo = TempData["dojo"];
            ViewBag.language = TempData["language"];
            ViewBag.message = TempData["message"];
        }

        return View("Results");
    }

    [HttpPost("process")]
    public RedirectToActionResult AddUser(string NameField, string DojoField, string LanguageField, string MessageField) {

        Console.WriteLine($"My name is: {NameField}");
        Console.WriteLine($"My Dojo is: {DojoField}");
        Console.WriteLine($"My favorite language is: {LanguageField}");
        Console.WriteLine($"My comment is: {MessageField}");

        TempData["name"] = NameField;
        TempData["dojo"] = DojoField;
        TempData["language"] = LanguageField;
        TempData["message"] = MessageField;

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
