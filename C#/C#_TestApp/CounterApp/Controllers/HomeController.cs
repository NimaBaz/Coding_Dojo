using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using CounterApp.Models;

namespace CounterApp.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Index(double num1, double num2, string operation)
    {
        double results = 0;

        switch (operation)
        {
            case "Add":
            results = num1 + num2;
            ViewBag.Result = results;
            break;

            case "Subtract":
            results = num1 - num2;
            ViewBag.Result = results;
            break;

            case "Multiply":
            results = num1 * num2;
            ViewBag.Result = results;
            break;

            case "Divide":
            if (num2 == 0)
            {
                ViewBag.Result = "Can't divide by 0!";
            }
            else
            {
                results = num1 / num2;
                ViewBag.Result = results;
            }
            break;

            default:
            ViewBag.Result = "This is not the way!";
            break;
        }

        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
