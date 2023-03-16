using System.ComponentModel.DataAnnotations;

namespace LoginRegistration.Models;

public class DateValidationAttribute: ValidationAttribute
    {

        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {

            System.Console.WriteLine(value);

            if (value == null) 
            {
                return new ValidationResult("Please enter your date of birth");
            }

            DateTime dateTime;
            if (DateTime.TryParse(value.ToString(), out dateTime))
            {
                DateTime date = dateTime.Date;
                if (DateTime.Compare(date, DateTime.Today) > 0)
                {
                    return new ValidationResult("Date cannot be in the future");
                }
                if (DateTime.Compare(date, DateTime.Today.AddYears(-18)) > 0)
                {
                    return new ValidationResult("Must be at least 18");
                }
                return ValidationResult.Success;
            }
            return new ValidationResult("Something is wrong");
        }

    }