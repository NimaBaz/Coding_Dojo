#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace ActivityCenter.Models;
public class Activity
{
    [Key]
    
    public int ActivityId { get; set; }

    [Required(ErrorMessage = "Please enter a title name")] 
    [MinLength(2, ErrorMessage = "Title name must be at least 2 characters long")]
    [Display(Name = "Title: ")]
    public string Title { get; set; }

    [Required(ErrorMessage = "Please enter a time for the activity")]
    [Display(Name = "Time: ")]
    [DataType(DataType.Time)]
    [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:H:mm}")]
    [DateValidation]
    public DateTime Time { get; set; }

    [DataType(DataType.Date)]
    [Required(ErrorMessage = "Please enter your date")]
    [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
    [Display(Name = "Date: ")]
    [DateValidation]
    public DateOnly Date {get;set;}

    [Required(ErrorMessage = "Please give the activity a duration time and unit")]
    [Display(Name = "Duration: ")]
    [Range(1, 100, ErrorMessage = "Please enter valid duration")]
    public int Duration { get; set; }

    [Required(ErrorMessage = "Please give the activity a duration unit")]
    public string DurationUnit { get; set; }

    [Required]
    [MinLength(10, ErrorMessage = "Must be at least 10 characters long"), MaxLength(255, ErrorMessage = "Max length is 255 characters long")]
    [Display(Name = "Description: ")]
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

    public List<UserActivity> AllUsers { get; set; } = new List<UserActivity>();
}
