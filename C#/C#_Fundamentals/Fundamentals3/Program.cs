// static List<string> PrintList(List<string> incomingList)
// {
//     for (int i = 0; i < incomingList.Count; i++) {
//         System.Console.WriteLine(incomingList[i]);
//     }

//     foreach (string i in incomingList) {
//             Console.WriteLine(i);
//     }

//     incomingList.ForEach(i => Console.WriteLine(i));

//     return incomingList;
// }
// List<string> TestStringList = new List<string>() {"Harry", "Steve", "Carla", "Jeanne"};
// PrintList(TestStringList);

// static int SumOfNumbers(List<int> IntList)
// {
//     int sum = 0;
//     foreach (int i in IntList) {
//         sum += i;
//         System.Console.WriteLine(sum);
//     }
//     return sum;
// }
// List<int> TestIntList = new List<int>() {2,7,12,9,3};
// // You should get back 33 in this example
// SumOfNumbers(TestIntList);

// static int FindMax(List<int> IntList)
// {
//     int maxValue = IntList[0];
//     foreach (int i in IntList) {
//         if (i > maxValue) {
//             maxValue = i;
//         }
//     }
//     return maxValue;
// }
// List<int> TestIntList2 = new List<int>() {-9,12,10,3,17,5};
// // You should get back 17 in this example
// System.Console.WriteLine(FindMax(TestIntList2));

// static List<int> alues(List<int>SquareV IntList)
// {
//     foreach (int i in IntList) {
//         int square = i * i;
//         System.Console.WriteLine(square);
//     }
//     return IntList;
// }
// List<int> TestIntList3 = new List<int>() {1,2,3,4,5};
// // You should get back [1,4,9,16,25], think about how you will show that this worked
// System.Console.WriteLine(SquareValues(TestIntList3));

// static int[] NonNegatives(int[] IntArray)
// {
//     for (int i = 0; i < IntArray.Length; i++) {
//         int value = IntArray[i];
//         if (value < 0) {
//             value = 0;
//         }
//         System.Console.WriteLine(value);
//     }
//     return IntArray;
// }
// int[] TestIntArray = new int[] {-1,2,3,-4,5};
// // You should get back [0,2,3,0,5], think about how you will show that this worked
// System.Console.WriteLine(NonNegatives(TestIntArray));

// static Dictionary<string,string> PrintDictionary(Dictionary<string,string> MyDictionary)
// {
//     foreach(KeyValuePair<string,string> entry in MyDictionary) {
//         Console.WriteLine($"{entry.Key} - {entry.Value}");
//     }

//     return MyDictionary;
// }

// Dictionary<string,string> TestDict = new Dictionary<string,string>();
// TestDict.Add("HeroName", "Iron Man");
// TestDict.Add("RealName", "Tony Stark");
// TestDict.Add("Powers", "Money and intelligence");
// System.Console.WriteLine(PrintDictionary(TestDict));

// static bool FindKey(Dictionary<string,string> MyDictionary, string SearchTerm)
// {
//     for (int i = 0; i < MyDictionary.Count; i++) {

//         if (MyDictionary.ContainsKey(SearchTerm)) {
//             return true;
//         }
//     }
//     return false;
// }
// // Use the TestDict from the earlier example or make your own
// // This should print true
// Console.WriteLine(FindKey(TestDict, "RealName"));
// // This should print false
// Console.WriteLine(FindKey(TestDict, "Name"));

// Ex: Given ["Julie", "Harold", "James", "Monica"] and [6,12,7,10], return a dictionary
// {
//	"Julie": 6,
//	"Harold": 12,
//	"James": 7,
//	"Monica": 10
// } 

static void PrintDictionary(Dictionary<string,int> MyDictionary)
{
    foreach(KeyValuePair<string,int> entry in MyDictionary) {
        Console.WriteLine($"{entry.Key} - {entry.Value}");
    }
}

static Dictionary<string,int> GenerateDictionary(List<string> Names, List<int> Numbers)
{
    Dictionary<string,int> TestDict = new Dictionary<string,int>();

    for (int i = 0; i < Names.Count; i++) {
        TestDict.Add(Names[i], Numbers[i]);
    }
    return TestDict;
}
// We've shown several examples of how to set your tests up properly, it's your turn to set it up!
// Your test code here
List<string> Names = new List<string>() {"Harry", "Steve", "Carla", "Jeanne"};
List<int> Numbers = new List<int>() {6,12,7,10};

PrintDictionary(GenerateDictionary(Names, Numbers));


