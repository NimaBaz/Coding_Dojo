#pragma warning disable CS8618

using System.ComponentModel.DataAnnotations;

namespace Products_and_Categories.Models;

public class Association
{
    [Key]

    public int AssociationId { get; set; }
    
    public int UserId { get; set; }

    public int ItemId { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    // Our navigation properties

    public User? User { get; set; }

    public Item? Item { get; set; }
}
