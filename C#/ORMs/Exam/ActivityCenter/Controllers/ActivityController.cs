// Using statements
using Microsoft.AspNetCore.Mvc;
using ActivityCenter.Models;
using Microsoft.EntityFrameworkCore;

namespace ActivityCenter.Controllers;
public class ActivityController : Controller
{
    private readonly ILogger<ActivityController> _logger;

    // Add a private variable of type MyContext (or whatever you named your context file)
    private MyContext _context;

    // Here we can "inject" our context service into the constructor 
    // The "logger" was something that was already in our code, we're just adding around it
    public ActivityController(ILogger<ActivityController> logger, MyContext context)
    {
        _logger = logger;
        // When our CRUDController is instantiated, it will fill in _context with context
        // Remember that when context is initialized, it brings in everything we need from DbContext
        // which comes from Entity Framework Core
        _context = context;
    }


//////////////////////////////////////////////////////!CREATE//////////////////////////////////////////////////////////////////////////

    [HttpGet("/activities/new")]
    public IActionResult NewActivty()
    {
        return View("~/Views/CRUD/NewActivity.cshtml");
    }

    [HttpPost("/activities/create")]
    public IActionResult CreateActivity(Activity newActivity)
    {
        newActivity.UserId = (int) HttpContext.Session.GetInt32("UserId");
        if(!ModelState.IsValid)
        {
            return View("~/Views/CRUD/NewActivity.cshtml", newActivity);
        }
        // We can take the Item object created from a form submission
        // and pass the object through the .Add() method
        // Remember that _context is our database
        _context.Add(newActivity);
        // OR _context.Items.Add(newItem); if we want to specify the table
        // EF Core will be able to figure out which table you meant based on the model
        // VERY IMPORTANT: save your changes at the end!
        _context.SaveChanges();

        return RedirectToAction("ShowAllActivities", "Home");
    }

    // [HttpPost("/activities/AddUser")]
    [HttpGet("/activities/AddUser/{ActivityId}")]
    public IActionResult AddUser(int ActivityId)
    {
        int UserId = (int) HttpContext.Session.GetInt32("UserId");

        UserActivity newUser = new UserActivity()
        {
            UserId = UserId,
            ActivityId = ActivityId
        };

        List<UserActivity> ActivityList = _context.UserActivities.Where(p => p.ActivityId == newUser.ActivityId && p.UserId == newUser.UserId).ToList();

        if (ActivityList.Count > 0) {
            return RedirectToAction("ShowAllActivities", "Home");
        }
        // We can take the User object created from a form submission
        // and pass the object through the .Add() method
        // Remember that _context is our database
        _context.Add(newUser);
        // OR _context.Users.Add(newUser); if we want to specify the table
        // EF Core will be able to figure out which table you meant based on the model
        // VERY IMPORTANT: save your changes at the end!
        _context.SaveChanges();

        return Redirect($"/activities/{newUser.ActivityId}");
    }

//////////////////////////////////////////////////////!CREATE//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!READ////////////////////////////////////////////////////////////////////////////

    [HttpGet("/activities/{id}")]
    public IActionResult ShowActivity(int id)
    {
        MyViewModel MyModel = new MyViewModel
        {
            Activity = _context.Activities.Include(u => u.User).Include(a => a.AllUsers).ThenInclude(c => c.User).FirstOrDefault(a => a.ActivityId == id)
        };

        List<User> AllMyUsers = _context.Users.ToList();
        ViewBag.AllUsers = AllMyUsers;
        ViewBag.ActivityId = id;

        return View("~/Views/CRUD/ShowActivity.cshtml", MyModel);
    }

//////////////////////////////////////////////////////!READ////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!UPDATE//////////////////////////////////////////////////////////////////////////

    [HttpGet("/activities/{ActivityId}/edit")]
    public IActionResult EditActivity(int ActivityId)
    {
        Activity? ItemToEdit = _context.Activities.FirstOrDefault(i => i.ActivityId == ActivityId);
        ViewBag.AllUsers = _context.Users.ToList();
        return View("~/Views/CRUD/EditActivity.cshtml", ItemToEdit);
    }

    [HttpPost("/activities/{ActivityId}/update")]
    public IActionResult UpdateActivity(Activity newActivity, int ActivityId)
    {
        // 2. Find the old version of the instance in your database
        Activity? OldItem = _context.Activities.FirstOrDefault(i => i.ActivityId == ActivityId);

        newActivity.UserId = (int) HttpContext.Session.GetInt32("UserId");
        // 3. Verify that the new instance passes validations
        if(!ModelState.IsValid || OldItem == null)
        {
            System.Console.WriteLine("We made it here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            // ViewBag.AllUsers = _context.Users.ToList();
            // 3.5. If it does not pass validations, show error messages
            // Be sure to pass the form back in so you don't lose your changes
            // It should be the old version so we can keep the ID
            // return View("~/Views/CRUD/EditActivity.cshtml", OldItem);
            return EditActivity(OldItem.ActivityId);
        }

        // 4. Overwrite the old version with the new version
        // Yes, this has to be done one attribute at a time
        OldItem.Title = newActivity.Title;
        OldItem.UserId = newActivity.UserId;
        OldItem.Date = newActivity.Date;
        OldItem.Time = newActivity.Time;
        OldItem.Duration = newActivity.Duration;
        OldItem.DurationUnit = newActivity.DurationUnit;
        OldItem.Description = newActivity.Description;

        // You updated it, so update the UpdatedAt field!
        OldItem.UpdatedAt = DateTime.Now;

        // 5. Save your changes
        _context.SaveChanges();

        // 6. Redirect to an appropriate page
        return RedirectToAction("ShowAllActivities", "Home");
    }

//////////////////////////////////////////////////////!UPDATE//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!DELETE//////////////////////////////////////////////////////////////////////////

    [HttpPost("/activities/{ActivityId}/destroy")]
    public IActionResult DestroyActivity(int ActivityId)
    {
        Activity? ActivityToDelete = _context.Activities.SingleOrDefault(i => i.ActivityId == ActivityId);
        if (ActivityToDelete == null || ActivityToDelete.UserId != HttpContext.Session.GetInt32("UserId"))
        {
            return RedirectToAction("~/Views/CRUD/ShowActivity.cshtml");
        }

        _context.Activities.Remove(ActivityToDelete);
        _context.SaveChanges();
        return RedirectToAction("ShowAllActivities", "Home");
    }

    // [HttpPost("/RemoveUser")]
    [HttpGet("/RemoveUser/{ActivityId}")]
    public IActionResult RemoveUser(int ActivityId)
    {
        UserActivity? UserToDelete = _context.UserActivities.Where(i => i.ActivityId == ActivityId && i.UserId == HttpContext.Session.GetInt32("UserId")).FirstOrDefault();

        if (UserToDelete == null || UserToDelete.UserId != HttpContext.Session.GetInt32("UserId"))
        {
            return RedirectToAction("~/Views/CRUD/ShowActivity.cshtml");
        }

        _context.UserActivities.Remove(UserToDelete);
        _context.SaveChanges();
        return RedirectToAction("ShowAllActivities", "Home");
    }

//////////////////////////////////////////////////////!DELETE//////////////////////////////////////////////////////////////////////////

}