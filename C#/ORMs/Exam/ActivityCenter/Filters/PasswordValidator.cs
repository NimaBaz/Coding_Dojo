using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace ActivityCenter.Models;

public class PasswordValidationAttribute: ValidationAttribute
    {

        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {

            if (value == null) 
            {
                return new ValidationResult("Please enter a password");
            }

            var input = value.ToString();

            var hasNumber = new Regex(@"[0-9]+");
            var hasUpperChar = new Regex(@"[A-Z]+");
            var hasMiniMaxChars = new Regex(@".{8,15}");
            var hasLowerChar = new Regex(@"[a-z]+");
            var hasSymbols = new Regex(@"[!@#$%^&*()_+=\[{\]};:<>|./?,-]");


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