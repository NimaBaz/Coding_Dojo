// Using statements
using Microsoft.AspNetCore.Mvc;
using ActivityCenter.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;

namespace ActivityCenter.Controllers;
public class UserController : Controller
{
    private readonly ILogger<UserController> _logger;

    // Add a private variable of type MyContext (or whatever you named your context file)
    private MyContext _context;

    // Here we can "inject" our context service into the constructor 
    // The "logger" was something that was already in our code, we're just adding around it
    public UserController(ILogger<UserController> logger, MyContext context)
    {
        _logger = logger;
        // When our UserController is instantiated, it will fill in _context with context
        // Remember that when context is initialized, it brings in everything we need from DbContext
        // which comes from Entity Framework Core
        _context = context;
    }


//////////////////////////////////////////////////////!REGISTER//////////////////////////////////////////////////////////////////////////

    [HttpPost("/users/create")]
    public IActionResult Register(User newUser) {

        if (!ModelState.IsValid) {
            return View("~/Views/Home/Index.cshtml");
        }

        Console.WriteLine($"My first name is: {newUser.FirstName}");
        Console.WriteLine($"My last name is: {newUser.LastName}");
        Console.WriteLine($"My email is: {newUser.Email}");
        Console.WriteLine($"My password is: {newUser.Password}");
        Console.WriteLine($"My confirmed password is: {newUser.ConfirmPassword}");

        // Initializing a PasswordHasher object, providing our User class as its type
        PasswordHasher<User> Hasher = new PasswordHasher<User>();

        // Updating our newUser's password to a hashed version
        newUser.Password = Hasher.HashPassword(newUser, newUser.Password);

        //Save your user object to the database 
        _context.Add(newUser);
        _context.SaveChanges();

        HttpContext.Session.SetInt32("UserId", newUser.UserId);

        return RedirectToAction("ShowAllActivities", "Home");
    }

//////////////////////////////////////////////////////!REGISTER//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!LOGIN//////////////////////////////////////////////////////////////////////////

    [HttpPost("/users/login")]
    public IActionResult Login(LoginUser userSubmission)
    {
        if (!ModelState.IsValid) {
            return View("~/Views/Home/Index.cshtml");
        }

        // If initial ModelState is valid, query for a user with the provided email
        User? userInDb = _context.Users.FirstOrDefault(u => u.Email == userSubmission.EmailLogin);

        // If no user exists with the provided email
        if(userInDb == null)
        {
            // Add an error to ModelState and return to View!
            ModelState.AddModelError("EmailLogin", "Invalid Email/Password");
            return View("~/Views/Home/Index.cshtml");
        }

        // Otherwise, we have a user, now we need to check their password
        // Initialize hasher object
        PasswordHasher<LoginUser> hasher = new PasswordHasher<LoginUser>();

        // Verify provided password against hash stored in db
        var result = hasher.VerifyHashedPassword(userSubmission, userInDb.Password, userSubmission.PasswordLogin);

        // Result can be compared to 0 for failure
        if(result == 0)
        {
            // Handle failure (this should be similar to how "existing email" is handled)
            ModelState.AddModelError("EmailLogin", "Invalid Email/Password");
            return View("~/Views/Home/Index.cshtml");
        } 

        HttpContext.Session.SetInt32("UserId", userInDb.UserId);
        HttpContext.Session.SetString("FirstName", userInDb.FirstName);

        return RedirectToAction("ShowAllActivities", "Home");
    }

//////////////////////////////////////////////////////!LOGIN//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!CLEAR SESSION//////////////////////////////////////////////////////////////////////////

    [HttpGet("/users/logout")]
    public IActionResult ClearSession()
    {
        HttpContext.Session.Remove("UserId");
        return View("~/Views/Home/Index.cshtml");
    }

//////////////////////////////////////////////////////!CLEAR SESSION//////////////////////////////////////////////////////////////////////////

}