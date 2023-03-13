// var builder = WebApplication.CreateBuilder(args);

// // Add services to the container.
// builder.Services.AddControllersWithViews();

// var app = builder.Build();

// // Configure the HTTP request pipeline.
// if (!app.Environment.IsDevelopment())
// {
//     app.UseExceptionHandler("/Home/Error");
// }
// app.UseStaticFiles();

// app.UseRouting();

// app.UseAuthorization();

// app.MapControllerRoute(
//     name: "default",
//     pattern: "{controller=Home}/{action=Index}/{id?}");

// app.Run();

List<Eruption> eruptions = new List<Eruption>()
{
    new Eruption("La Palma", 2021, "Canary Is", 2426, "Stratovolcano"),
    new Eruption("Villarrica", 1963, "Chile", 2847, "Stratovolcano"),
    new Eruption("Chaiten", 2008, "Chile", 1122, "Caldera"),
    new Eruption("Kilauea", 2018, "Hawaiian Is", 1122, "Shield Volcano"),
    new Eruption("Hekla", 1206, "Iceland", 1490, "Stratovolcano"),
    new Eruption("Taupo", 1910, "New Zealand", 760, "Caldera"),
    new Eruption("Lengai, Ol Doinyo", 1927, "Tanzania", 2962, "Stratovolcano"),
    new Eruption("Santorini", 46, "Greece", 367, "Shield Volcano"),
    new Eruption("Katla", 950, "Iceland", 1490, "Subglacial Volcano"),
    new Eruption("Aira", 766, "Japan", 1117, "Stratovolcano"),
    new Eruption("Ceboruco", 930, "Mexico", 2280, "Stratovolcano"),
    new Eruption("Etna", 1329, "Italy", 3320, "Stratovolcano"),
    new Eruption("Bardarbunga", 1477, "Iceland", 2000, "Stratovolcano")
};

// First OR FirstOrDefault
// Eruption selectedEruption = eruptions.FirstOrDefault(c => c.Volcano == "Etna");
// System.Console.WriteLine(selectedEruption);

// Any -> return us?
// Boolean isFound = eruptions.Any(c => c.Year < 1000);
// System.Console.WriteLine(isFound);

// OrderBy OR OrderByDecending
// List<Eruption> sortedEruptions = eruptions.OrderBy(c => c.Type == "Stratovolcano").ThenByDescending(c => c.Year).ToList();
// List<Eruption> sortedEruptions = eruptions.Where(c => c.Type.ToLower() == "Stratovolcano").Where(c => c.Year < 2000).ToList();

// Example Query - Prints all Stratovolcano eruptions
// IEnumerable<Eruption> stratovolcanoEruptions = eruptions.Where(c => c.Type == "Stratovolcano");
// PrintEach(stratovolcanoEruptions, "Stratovolcano eruptions.");
// Execute Assignment Tasks here!


// Use LINQ to find the first eruption that is in Chile and print the result.
// List<Eruption> sortedEruptions = eruptions.Where(c => c.Location == "Chile").Where(c => c.Year < 2000).ToList();
// PrintEach(sortedEruptions);

// Find the first eruption from the "Hawaiian Is" location and print it. If none is found, print "No Hawaiian Is Eruption found."
// List<Eruption> sortedEruptions = eruptions.Where(c => c.Location == "Hawaiian Is").ToList();
// PrintEach(sortedEruptions);
// Boolean isFound = eruptions.Any(c => c.Location == "Hawaiian Is");
// System.Console.WriteLine(isFound);

// Find the first eruption from the "Greenland" location and print it. If none is found, print "No Greenland Eruption found."
// Boolean isFound = eruptions.Any(c => c.Location == "Greenland");
// System.Console.WriteLine(isFound ? "Greenland" : "No Greenland Eruption found.");

// Find the first eruption that is after the year 1900 AND in "New Zealand", then print it.
// Eruption? sortedEruptions = eruptions.Where(c => c.Location == "New Zealand").FirstOrDefault(c => c.Year > 1900);
// System.Console.WriteLine(sortedEruptions);

// Find all eruptions where the volcano's elevation is over 2000m and print them.
// IEnumerable<Eruption> sortedEruptions = eruptions.Where(c => c.ElevationInMeters > 2000).ToList();
// PrintEach(sortedEruptions);

// Find all eruptions where the volcano's name starts with "L" and print them. Also print the number of eruptions found.
// IEnumerable<Eruption> sortedEruptions = eruptions.Where(c => c.Volcano.StartsWith("L")).ToList();
// int count = sortedEruptions.Count();
// PrintEach(sortedEruptions);
// System.Console.WriteLine($"There are {count} eruptions found");

// Find the highest elevation, and print only that integer (Hint: Look up how to use LINQ to find the max!)
// Eruption? sortedEruptions = eruptions.MaxBy(c => c.ElevationInMeters);
// int maxElevation = eruptions.Max(c => c.ElevationInMeters);
// System.Console.WriteLine($"The highest elevation is {maxElevation}");
// System.Console.WriteLine($"The highest elevation is {sortedEruptions}");

// Use the highest elevation variable to find and print the name of the Volcano with that elevation.
// IEnumerable<string> sortedEruptions = eruptions.Where(c => c.ElevationInMeters == maxElevation).Select(c => c.Volcano);
// foreach (string volcano in sortedEruptions)
// {
//     System.Console.WriteLine(volcano);
// }

// Print all Volcano names alphabetically.
// List<Eruption> sortedEruptions = eruptions.OrderBy(c => c.Volcano).ToList();
// PrintEach(sortedEruptions);

// Print the sum of all the elevations of the volcanoes combined.
// int elevationSum = eruptions.Sum(c => c.ElevationInMeters);
// System.Console.WriteLine($"The sum of all the elevations is {elevationSum}");

// Print whether any volcanoes erupted in the year 2000 (Hint: look up the Any query)
// Boolean isFound = eruptions.Any(c => c.Year == 2000);
// System.Console.WriteLine(isFound ? "Volcanoes erupted in the year 2000" : "No volcanoes erupted in the year 2000");

// Find all stratovolcanoes and print just the first three (Hint: look up Take)
// IEnumerable<Eruption> stratovolcanoEruptions = eruptions.Where(c => c.Type == "Stratovolcano").Take(3);
// PrintEach(stratovolcanoEruptions, "Stratovolcano eruptions.");

// Print all the eruptions that happened before the year 1000 CE alphabetically according to Volcano name.
// IEnumerable<Eruption> before1000 = eruptions.Where(c => c.Year < 1000).OrderBy(c => c.Volcano);
// PrintEach(before1000);

// Redo the last query, but this time use LINQ to only select the volcano's name so that only the names are printed.
// IEnumerable<string> sortedEruptions = eruptions.Where(c => c.Year < 1000).OrderBy(c => c.Volcano).Select(c => c.Volcano);
// foreach (string volcano in sortedEruptions)
// {
//     System.Console.WriteLine(volcano);
// }


// Helper method to print each item in a List or IEnumerable. This should remain at the bottom of your class!
static void PrintEach(IEnumerable<Eruption> items, string msg = "")
{
    Console.WriteLine("\n" + msg);
    foreach (Eruption item in items)
    {
        Console.WriteLine(item.ToString());
    }
}

