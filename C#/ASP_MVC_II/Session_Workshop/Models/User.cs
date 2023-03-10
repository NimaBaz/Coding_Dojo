#pragma warning disable CS8618

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.RegularExpressions;

namespace Session_Workshop.Models;

public class User
{    
    [Required(ErrorMessage = "Please enter a first name")] 
    [MinLength(2, ErrorMessage = "First name must be at least 2 characters long")]
    public string FirstName {get;set;}

    [Required(ErrorMessage = "Please enter a last name")] 
    [MinLength(2, ErrorMessage = "First name must be at least 2 characters long")]
    public string LastName {get;set;}

    [DataType(DataType.EmailAddress)]
    [Required(ErrorMessage = "Please Enter Email")]
    [EmailAddress(ErrorMessage = "Invalid Email Address")]
    [RegularExpression(@"^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$", ErrorMessage = "Invalid Email Address")]
    public string Email {get;set;}

    [DataType(DataType.Date)]
    [Required(ErrorMessage = "Please enter your date of birth")]
    [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
    [CustomValidation(typeof(CustomValidationMethods), nameof(CustomValidationMethods.PastDate))]
    [CustomValidation(typeof(CustomValidationMethods), nameof(CustomValidationMethods.Not18))]
    public Nullable<System.DateTime> DoB {get;set;}

    [DataType(DataType.Password)]
    [MinLength(8, ErrorMessage = "Password must be 8 characters long")]
    [CustomValidation(typeof(CustomValidationMethods), nameof(CustomValidationMethods.ValidatePassword))]
    public string Password {get;set;}

    [NotMapped]
    [DataType(DataType.Password)]
    [CompareAttribute("Password", ErrorMessage = "Password doesn't match.")]
    [CustomValidation(typeof(CustomValidationMethods), nameof(CustomValidationMethods.ValidatePassword))]
    public string ConfirmPassword {get;set;}

//****************************************************************************************************************************************

    public class CustomValidationMethods
    {

        public static ValidationResult? PastDate(DateTime date)
        {
            return DateTime.Compare(date, DateTime.Today) > 0 ? new ValidationResult("Date cannot be in the future") : ValidationResult.Success;
        }

        public static ValidationResult? Not18(DateTime date)
        {
            DateTime today = DateTime.Today;
            return DateTime.Compare(date, DateTime.Today.AddYears(-18)) > 0 ? new ValidationResult("Must be at least 18") : ValidationResult.Success;
        }

        public static ValidationResult? ValidateFavNum(int num)
        {
            var input = num;

            if (input % 2 == 0) 
            {
                return new ValidationResult("Please enter an Odd number");
            }
            else
            {
                return ValidationResult.Success;
            }
        }

        public static bool ValidateEmail(string email)
        {
            var input = email;

            var trimmedEmail = email.Trim();

            if (trimmedEmail.EndsWith(".")) {
                return false;
            }
            try {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == trimmedEmail;
            }
            catch {
                return false;
            }
        }

        public static ValidationResult? ValidatePassword(string password)
        {
            var input = password;

            var hasNumber = new Regex(@"[0-9]+");
            var hasUpperChar = new Regex(@"[A-Z]+");
            var hasMiniMaxChars = new Regex(@".{8,15}");
            var hasLowerChar = new Regex(@"[a-z]+");
            var hasSymbols = new Regex(@"[!@#$%^&*()_+=\[{\]};:<>|./?,-]");

            if (input == null) 
            {
                return new ValidationResult("Please enter a password");
            }

            if (!hasLowerChar.IsMatch(input))
            {

                return new ValidationResult("Password should contain at least one lower case letter");
            }
            else if (!hasUpperChar.IsMatch(input))
            {
                return new ValidationResult("Password should contain at least one upper case letter");

            }
            else if (!hasNumber.IsMatch(input))
            {
                return new ValidationResult("Password should contain at least one number");
            }

            else if (!hasSymbols.IsMatch(input))
            {
                return new ValidationResult("Password should contain at least one special character");
            }
            else
            {
                return ValidationResult.Success;
            }
        }
    }

}
