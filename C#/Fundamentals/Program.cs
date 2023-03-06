// static void createInt() {
//     for (int i = 0; i < 10; i++) {
//         System.Console.WriteLine(i);
//     }
// }

// createInt();

// static void createString() {
//     string[] names = new string[] { "Nima", "Tim", "Martin", "Nikki", "Sara" };

//     for (int i = 0; i < names.Length; i++) {
//         System.Console.WriteLine($"My name is {names[i]}");
//     }
// }

// createString();

// static void createBoolean() {
//     bool[] arr = new bool[10];

//     for (int i = 0; i < arr.Length; i++) { 
//         bool tempBool = i % 2 == 0;
//         arr[i] = tempBool; 
//     }
//     for (int i = 0; i < 10; i++) {
//         System.Console.WriteLine(arr[i]);
//     }
// }

// createBoolean();

// static List<string> iceCream() {
//     List<string> iceCream = new List<string>();

//     // Use the Add function in a similar fashion to push
//     iceCream.Add("Vanilla");
//     iceCream.Add("Chocolate");
//     iceCream.Add("Strawberry");
//     iceCream.Add("Mint");
//     iceCream.Add("CookiesNCream");

//     // Accessing a generic list value is the same as an array
//     Console.WriteLine(iceCream[2]);

//     // To get the size of a List, we use Count instead of Length
//     Console.WriteLine($"We currently have {iceCream.Count} ice cream flavors.");

//     iceCream.RemoveAt(2);

//     Console.WriteLine($"We currently have {iceCream.Count} ice cream flavors.");

//     return iceCream;
// }

// iceCream();

// static Dictionary<string,string> iceCream2() {
//     string[] names = new string[] { "Nima", "Tim", "Martin", "Nikki", "Sara" };

//     List<string> iceCream = new List<string>();

//     // Use the Add function in a similar fashion to push
//     iceCream.Add("Vanilla");
//     iceCream.Add("Chocolate");
//     iceCream.Add("Strawberry");
//     iceCream.Add("Mint");
//     iceCream.Add("CookiesNCream");

//     Dictionary<string,string> iceCream2 = new Dictionary<string,string>();

//     for (int i = 0; i < iceCream.Count; i++) {
//         iceCream2.Add(names[i], iceCream[i]);
//     }

//     foreach(KeyValuePair<string,string> entry in iceCream2) {
//         Console.WriteLine($"{entry.Key} - {entry.Value}");
//     }

//     return iceCream2;
// }

// iceCream2();
