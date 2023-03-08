using Microsoft.AspNetCore.Mvc;

public class HomeController : Controller {

    [HttpGet("/")]
    public ViewResult Index() {
        return View("Index");
    }

    [HttpGet("/users")]
    public ViewResult Users() {
        List<string> UsersList = new List<string>() {
            "Nima", "Tyler", "Andres", "Kris", "Kate"
        };

        ViewBag.UserIds = UsersList;
        return View("Users");
    }

    [HttpGet("/contacts")]
    public ViewResult Contacts() {
        List<string> UsersList = new List<string>() {
            "Nima", "Tyler", "Andres", "Kris", "Kate"
        };

        ViewBag.UserIds = UsersList;
        return View("Contacts");
    }
}