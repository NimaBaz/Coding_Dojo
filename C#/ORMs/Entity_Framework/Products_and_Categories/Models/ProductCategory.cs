#pragma warning disable CS8618

using System.ComponentModel.DataAnnotations;

namespace Products_and_Categories.Models;

public class ProductCategory
{
    [Key]

    public int ProductCategoryId { get; set; }
    
    [Display(Name = "Category")]
    public int CategoryId { get; set; }

    [Display(Name = "Product")]
    public int ItemId { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    // Our navigation properties

    public Category? Category { get; set; }

    public Item? Item { get; set; }
}
