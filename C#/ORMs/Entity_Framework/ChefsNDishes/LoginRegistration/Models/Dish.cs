#pragma warning disable CS8618

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoginRegistration.Models;

public class Dish
{
    [Key]
    
    public int DishId { get; set; }

    public string Name { get; set; }

    public int Tastiness { get; set; }

    public int Calories { get; set; }

    public string Description { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    // This is the ID we will use to know which User made the post
    // This name should match the name of the key from the User table (UserId)
    [Required]
    [Display(Name = "Chef")]
    public int UserId { get; set; }

    // Our navigation property to track which User made this Post
    public User? User { get; set; }

    // Our navigation property to track the many Posts our user has made
    [NotMapped]
    public List<User> AllUsers { get; set; } = new List<User>();
}
