#pragma warning disable CS8618

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Products_and_Categories.Models;

public class Item
{
    [Key]
    
    public int ItemId { get; set; }

    [Required(ErrorMessage = "Please enter a product name")] 
    [MinLength(2, ErrorMessage = "Product name must be at least 2 characters long")]
    public string Name { get; set; }

    [Required(ErrorMessage = "Please enter a price for the product")]
    [Range(1, 1000000, ErrorMessage = "Please enter valid price")]
    public int Price { get; set; }

    [Required]
    [MinLength(3, ErrorMessage = "Must be at least 3 characters long"), MaxLength(255, ErrorMessage = "Max length is 255 characters long")]
    public string Description { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    // This is the ID we will use to know which User made the post
    // This name should match the name of the key from the User table (UserId)
    [Required]
    [Display(Name = "User")]
    public int UserId { get; set; }

    // Our navigation property to track which User made this Post
    public User? User { get; set; }

    public List<Association> AllAssociations { get; set; } = new List<Association>();

    public List<ProductCategory> AllCategories { get; set; } = new List<ProductCategory>();
}
