#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace ArtStagram.Models;
public class Post
{
    [Key]
    
    public int PostId { get; set; }

    [Required(ErrorMessage = "Please enter a image url")] 
    [Display(Name = "Image: ")]
    public string Image { get; set; }

    [Required(ErrorMessage = "Please enter a title name")] 
    [MinLength(2, ErrorMessage = "Title name must be at least 2 characters long")]
    [Display(Name = "Title: ")]
    public string Title { get; set; }

    [Required(ErrorMessage = "Please enter a medium")]
    [MinLength(10, ErrorMessage = "Must be at least 10 characters long"), MaxLength(255, ErrorMessage = "Max length is 255 characters long")]
    [Display(Name = "Medium: ")]
    public string Medium { get; set; }

    [Required(ErrorMessage = "Please tell us if this is for sale or not")]
    [Display(Name = "For Sale: ")]
    public bool ForSale { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    // This is the ID we will use to know which User made the post
    // This name should match the name of the key from the User table (UserId)
    [Required]
    [Display(Name = "User")]
    public int UserId { get; set; }

    // Our navigation property to track which User made this Post
    public User? User { get; set; }

    public List<UserPost> AllUsers { get; set; } = new List<UserPost>();
}
