#pragma warning disable CS8618

namespace Products_and_Categories.Models;

public class MyViewModel
{
    public User User { get; set; }
    
    public List<User> AllUsers { get; set; }

    public Item Item { get; set; }

    public List<Item> AllItems { get; set; }

    public Category Category { get; set; }

    public List<Category> AllCategories { get; set; }

    public Association Association { get; set; }

    public List<Association> AllAssociations { get; set; }

    public ProductCategory ProductCategory { get; set; }

    public List<ProductCategory> AllProductCategories { get; set; }
}