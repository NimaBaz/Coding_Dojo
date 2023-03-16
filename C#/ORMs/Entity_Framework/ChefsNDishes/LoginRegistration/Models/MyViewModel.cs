#pragma warning disable CS8618

namespace LoginRegistration.Models;

public class MyViewModel
{
    public User User { get; set; }
    
    public List<User> AllUsers { get; set; }

    public Dish Dish { get; set; }

    public List<Dish> AllDishes { get; set; }
}