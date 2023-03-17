dotnet new mvc --no-https -o %1
cd %1
dotnet add package Pomelo.EntityFrameworkCore.MySql --version 6.0.1
dotnet add package Microsoft.EntityFrameworkCore.Design --version 6.0.3

cd Models
type nul > Item.cs

(
 echo #pragma warning disable CS8618
 echo using System.ComponentModel.DataAnnotations;
 echo namespace YourProjectName.Models;
 echo public class Item
 echo {
 echo     [Key]
 echo     public int ItemId { get; set; }
 echo 
 echo     // Add rest of the model
 echo 
 echo     public DateTime CreatedAt { get; set; } = DateTime.Now;
 echo     public DateTime UpdatedAt { get; set; } = DateTime.Now;
 echo }
) > Item.cs

type nul > MyContext.cs

(
 echo #pragma warning disable CS8618
 echo // We can disable our warnings safely because we know the framework will assign non-null values
 echo // when it constructs this class for us.
 echo using Microsoft.EntityFrameworkCore;
 echo namespace YourProjectName.Models;
 echo // the MyContext class represents a session with our MySQL database, allowing us to query for or save data
 echo // DbContext is a class that comes from EntityFramework, we want to inherit its features
 echo public class MyContext : DbContext
 echo {
 echo   // This line will always be here. It is what constructs our context upon initialization
 echo   // We need to create a new DbSet<Model> for every model in our project that is making a table
 ) > MyContext.cs
 
 echo:   public MyContext(DbContextOptions options) : base(options) { } >> MyContext.cs
 (
 echo   // The name of our table in our database will be based on the name we provide here
 echo   // This is where we provide a plural version of our model to fit table naming standards
 ) >> MyContext.cs
 
 echo   public DbSet^<Item^> Items { get; set; } >> MyContext.cs
 echo }  >> MyContext.cs
cd..
MKDIR Migration
MKDIR FirstMigration


echo:{  > appsettings.json
echo:    "Logging": { >> appsettings.json
echo:        "LogLevel": { >> appsettings.json
echo:            "Default": "Information", >> appsettings.json
echo:            "Microsoft.AspNetCore": "Warning" >> appsettings.json
echo:        } >> appsettings.json
echo:    }, >> appsettings.json
echo:    "AllowedHosts": "*", >> appsettings.json
echo:    "ConnectionStrings": >> appsettings.json
echo:    { >> appsettings.json
echo:        "DefaultConnection": "Server=localhost;port=3306;userid=root;password=root;database=itemdb;" >> appsettings.json
echo:    } >> appsettings.json
echo:} >> appsettings.json
