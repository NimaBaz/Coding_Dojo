using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Session_Workshop.Models;

namespace Session_Workshop.Controllers;

public class HomeController : Controller
{
    public static int counter = 0;
    
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

    [HttpGet("/results")]
    public IActionResult Results() {
        if (HttpContext.Session.GetString("firstname") == null)
        {
            return RedirectToAction("Index");
        }
        return View("Results", counter);
    }

    [HttpPost("/process")]
    public IActionResult AddUser(User users) {

        if (!ModelState.IsValid) {
            return View("Index");
        }

        Console.WriteLine($"My first name is: {users.FirstName}");
        Console.WriteLine($"My last name is: {users.LastName}");
        Console.WriteLine($"My email is: {users.Email}");
        Console.WriteLine($"My birthday is: {users.DoB}");
        Console.WriteLine($"My password is: {users.Password}");
        Console.WriteLine($"My confirmed password is: {users.ConfirmPassword}");

        HttpContext.Session.SetString("firstname", users.FirstName);
        HttpContext.Session.SetString("lastname", users.LastName);

        return RedirectToAction("Results");
    }

    [HttpPost("/counter")]
    public IActionResult Counter(int num) {
        if (num == 1) {
            counter += 1;
        }
        else if (num == 2) {
            counter -= 1;
        }
        else if (num == 3) {
            counter *= 2;
        }
        else if (num == 4) {
            Random random = new Random();
            counter += random.Next(1, 11);
        }

        System.Console.WriteLine(num);
        return RedirectToAction("Results");
    }

    [HttpGet("ClearSession")]
    public IActionResult ClearSession()
    {
        counter = 0;
        HttpContext.Session.Clear();
        return View("Index");
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

