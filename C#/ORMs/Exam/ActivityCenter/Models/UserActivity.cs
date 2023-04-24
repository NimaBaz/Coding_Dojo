#pragma warning disable CS8618

using System.ComponentModel.DataAnnotations;

namespace ActivityCenter.Models;

public class UserActivity
{
    [Key]

    public int UserActivityId { get; set; }
    
    [Display(Name = "Activity")]
    public int ActivityId { get; set; }

    [Display(Name = "User")]
    public int UserId { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    // Our navigation properties

    public User? User { get; set; }

    public Activity? Activity { get; set; }
}
