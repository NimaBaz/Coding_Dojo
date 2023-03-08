using Microsoft.AspNetCore.Mvc;

public class HomeController : Controller {

    [HttpGet("/")]
    public ViewResult Index() {
        return View("Index");
    }

    [HttpGet("/users")]
    public ViewResult Users() {
        List<string> UsersList = new List<string>() {
            "Tyler", "Andres", "Kris", "Kate"
        };

        ViewBag.UserIds = UsersList;
        return View("Users");
    }

    [HttpGet("/contacts")]
    public ViewResult Contacts() {
        return View("Contacts");
    }

    [HttpPost("process")]
    public IActionResult Process(string NameField, string EmailField, string MessageField) {
        Console.WriteLine($"My name is: {NameField}");
        Console.WriteLine($"My email is: {EmailField}");
        Console.WriteLine($"My comment is: {MessageField}");

        return View("Process");
    }
}