#pragma warning disable CS8618

using System.ComponentModel.DataAnnotations;

namespace Wedding_Planner.Models;

public class RSVPWedding
{
    [Key]

    public int RSVPWeddingId { get; set; }
    
    [Display(Name = "User")]
    public int UserId { get; set; }

    [Display(Name = "Wedding")]
    public int WeddingId { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    // Our navigation properties

    public User? User { get; set; }

    public Wedding? Wedding { get; set; }
}
