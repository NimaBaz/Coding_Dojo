#pragma warning disable CS8618

using System.ComponentModel.DataAnnotations;

namespace ActivityCenter.Models;

public class LoginUser
{
    // No other fields!
    [DataType(DataType.EmailAddress)]
    [Required]
    [EmailAddress]
    [Display(Name = "Email: ")]
    [RegularExpression(@"^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$", ErrorMessage = "Invalid Email Address")]
    public string EmailLogin { get; set; }

    [DataType(DataType.Password)]
    [Display(Name = "Password: ")]
    [MinLength(8, ErrorMessage = "Password must be 8 characters long")]
    [PasswordValidation]
    public string PasswordLogin { get; set; }

}

