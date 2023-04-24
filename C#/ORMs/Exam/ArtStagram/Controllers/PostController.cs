// Using statements
using Microsoft.AspNetCore.Mvc;
using ArtStagram.Models;
using Microsoft.EntityFrameworkCore;

namespace ArtStagram.Controllers;
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

    [SessionCheck]
    [HttpGet("/posts/new")]
    public IActionResult NewPost()
    {
        return View("~/Views/CRUD/NewPost.cshtml");
    }

    [SessionCheck]
    [HttpPost("/Post/CreatePost")]
    public IActionResult CreatePost(Post newPost)
    {
        if(!ModelState.IsValid)
        {
            return View("~/Views/CRUD/NewPost.cshtml", newPost);
        }

        newPost.UserId = (int) HttpContext.Session.GetInt32("UserId");
        // We can take the Item object created from a form submission
        // and pass the object through the .Add() method
        // Remember that _context is our database
        _context.Add(newPost);
        // OR _context.Posts.Add(newPost); if we want to specify the table
        // EF Core will be able to figure out which table you meant based on the model
        // VERY IMPORTANT: save your changes at the end!
        _context.SaveChanges();

        return Redirect($"/posts/{newPost.PostId}");
        // return RedirectToAction("Dashboard", "Home");
    }

    [SessionCheck]
    [HttpGet("/posts/AddLike/{PostId}")]
    public IActionResult AddLike(int PostId)
    {
        int UserId = (int) HttpContext.Session.GetInt32("UserId");

        UserPost newUser = new UserPost()
        {
            UserId = UserId,
            PostId = PostId
        };

        List<UserPost> PostList = _context.UserPosts.Where(p => p.PostId == newUser.PostId && p.UserId == newUser.UserId).ToList();

        if (PostList.Count > 0) {
            return RedirectToAction("Dashboard", "Home");
        }
        // We can take the User object created from a form submission
        // and pass the object through the .Add() method
        // Remember that _context is our database
        _context.Add(newUser);
        // OR _context.Users.Add(newUser); if we want to specify the table
        // EF Core will be able to figure out which table you meant based on the model
        // VERY IMPORTANT: save your changes at the end!
        _context.SaveChanges();

        // return Redirect($"/posts/{newUser.PostId}");
        return RedirectToAction("Dashboard", "Home");
    }

//////////////////////////////////////////////////////!CREATE//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!READ////////////////////////////////////////////////////////////////////////////

    [SessionCheck]
    [HttpGet("/posts/{id}")]
    public IActionResult ShowPost(int id)
    {
        MyViewModel MyModel = new MyViewModel
        {
            Post = _context.Posts.Include(u => u.User).Include(a => a.AllUsers).ThenInclude(c => c.User).FirstOrDefault(a => a.PostId == id)
        };

        List<User> AllMyUsers = _context.Users.ToList();
        ViewBag.AllUsers = AllMyUsers;
        ViewBag.PostId = id;

        return View("~/Views/CRUD/ShowPost.cshtml", MyModel);
    }

//////////////////////////////////////////////////////!READ////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!UPDATE//////////////////////////////////////////////////////////////////////////

    [SessionCheck]
    [HttpGet("/posts/{PostId}/edit")]
    public IActionResult EditPost(int PostId)
    {
        Post? PostToEdit = _context.Posts.FirstOrDefault(i => i.PostId == PostId);
        ViewBag.AllUsers = _context.Users.ToList();
        return View("~/Views/CRUD/EditPost.cshtml", PostToEdit);
    }

    [SessionCheck]
    [HttpPost("/Post/UpdatePost")]
    public IActionResult UpdatePost(Post newPost, int PostId)
    {
        // 2. Find the old version of the instance in your database
        Post? OldPost = _context.Posts.FirstOrDefault(i => i.PostId == PostId);

        // 3. Verify that the new instance passes validations
        if(!ModelState.IsValid || OldPost == null)
        {
            // ViewBag.AllUsers = _context.Users.ToList();
            // 3.5. If it does not pass validations, show error messages
            // Be sure to pass the form back in so you don't lose your changes
            // It should be the old version so we can keep the ID
            // return View("~/Views/CRUD/EditActivity.cshtml", OldPost);
            return EditPost(OldPost.PostId);
        }

        newPost.UserId = (int) HttpContext.Session.GetInt32("UserId");
        // 4. Overwrite the old version with the new version
        // Yes, this has to be done one attribute at a time
        OldPost.Image = newPost.Image;
        OldPost.Title = newPost.Title;
        OldPost.UserId = newPost.UserId;
        OldPost.Medium = newPost.Medium;
        OldPost.ForSale = newPost.ForSale;

        // You updated it, so update the UpdatedAt field!
        OldPost.UpdatedAt = DateTime.Now;

        // 5. Save your changes
        _context.SaveChanges();

        // 6. Redirect to an appropriate page
        // return RedirectToAction("Dashboard", "Home");
        return Redirect($"/posts/{newPost.PostId}");
    }

//////////////////////////////////////////////////////!UPDATE//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////!DELETE//////////////////////////////////////////////////////////////////////////

    [SessionCheck]
    [HttpGet("/Post/DestroyPost/{PostId}")]
    public IActionResult DestroyPost(int PostId)
    {
        Post? PostToDelete = _context.Posts.FirstOrDefault(i => i.PostId == PostId);
        if (PostToDelete == null || PostToDelete.UserId != HttpContext.Session.GetInt32("UserId"))
        {
            return RedirectToAction("~/Views/CRUD/ShowPost.cshtml");
        }

        _context.Posts.Remove(PostToDelete);
        _context.SaveChanges();
        return RedirectToAction("Dashboard", "Home");
    }

    [SessionCheck]
    [HttpGet("/RemoveLike/{PostId}")]
    public IActionResult RemoveLike(int PostId)
    {
        UserPost? UserToDelete = _context.UserPosts.Where(i => i.PostId == PostId && i.UserId == HttpContext.Session.GetInt32("UserId")).FirstOrDefault();

        if (UserToDelete == null || UserToDelete.UserId != HttpContext.Session.GetInt32("UserId"))
        {
            return RedirectToAction("~/Views/CRUD/ShowPost.cshtml");
        }

        _context.UserPosts.Remove(UserToDelete);
        _context.SaveChanges();
        return RedirectToAction("Dashboard", "Home");
    }

//////////////////////////////////////////////////////!DELETE//////////////////////////////////////////////////////////////////////////

}