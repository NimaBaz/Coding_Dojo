#pragma warning disable CS8618

using System.ComponentModel.DataAnnotations;

namespace ArtStagram.Models;

public class UserPost
{
    [Key]

    public int UserPostId { get; set; }
    
    [Display(Name = "Post")]
    public int PostId { get; set; }

    [Display(Name = "User")]
    public int UserId { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    // Our navigation properties

    public User? User { get; set; }

    public Post? Post { get; set; }
}
