#pragma warning disable CS8618

namespace Dojo_Survey.Models;

public class User
{    
    // We must put {get;set;} after all our properties
    // This will give ASP.NET Core the permissions it needs to modify the values
    public string? FirstName {get;set;}

    public string? LastName {get;set;}

    public string? Dojo {get;set;}

    public int Language {get;set;}

    public int Message {get;set;}
}