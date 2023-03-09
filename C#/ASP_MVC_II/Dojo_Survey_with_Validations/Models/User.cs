#pragma warning disable CS8618

using System.ComponentModel.DataAnnotations;

namespace Dojo_Survey.Models;

public class User
{    
    [Required(ErrorMessage = "Please Enter a first name"), MinLength(2, ErrorMessage = "First name must be at least 2 characters long")]
    public string FirstName {get;set;}

    [Required(ErrorMessage = "Please Enter a last name"), MinLength(2, ErrorMessage = "First name must be at least 2 characters long")]
    public string LastName {get;set;}

    [Required(ErrorMessage = "Please select a location")]
    public string Dojo {get;set;}

    [Required(ErrorMessage = "Please select a language")]
    public string Language {get;set;}

    [MinLength(3, ErrorMessage = "Must be at least 3 characters long"), MaxLength(255, ErrorMessage = "Max length is 255 characters long")]
    public string? Message {get;set;}

}

