#pragma warning disable CS8618

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoginRegistration.Models;

public class User
{
    [Key]
    public int UserId { get; set; }
    
    [Required(ErrorMessage = "Please enter a first name")] 
    [MinLength(2, ErrorMessage = "First name must be at least 2 characters long")]
    [Display(Name = "First Name")]
    public string FirstName { get; set; }

    [Required(ErrorMessage = "Please enter a last name")] 
    [MinLength(2, ErrorMessage = "First name must be at least 2 characters long")]
    [Display(Name = "Last Name")]
    public string LastName { get; set; }

    [DataType(DataType.EmailAddress)]
    [Required]
    [EmailAddress]
    [EmailValidation]
    [RegularExpression(@"^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$", ErrorMessage = "Invalid Email Address")]
    public string Email { get; set; }

    [DataType(DataType.Password)]
    [MinLength(8, ErrorMessage = "Password must be 8 characters long")]
    [PasswordValidation]
    public string Password { get; set; }

    [Required]
    [NotMapped]
    [DataType(DataType.Password)]
    [CompareAttribute("Password", ErrorMessage = "Password doesn't match.")]
    [Display(Name = "Confirm Password")]
    [PasswordValidation]
    public string ConfirmPassword { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;

    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    // Our navigation property to track the many Posts our user has made
    public List<Dish> AllDishes { get; set; } = new List<Dish>();

}
