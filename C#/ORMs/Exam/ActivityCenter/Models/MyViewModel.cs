#pragma warning disable CS8618

namespace ActivityCenter.Models;

public class MyViewModel
{
    public User User { get; set; }
    
    public List<User> AllUsers { get; set; }

    public Activity Activity { get; set; }

    public List<Activity> AllActivities { get; set; }

    public UserActivity UserActivity { get; set; }

    public List<UserActivity> AllUserActivities { get; set; }

}