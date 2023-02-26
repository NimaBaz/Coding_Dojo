var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
var dojoDiv = document.querySelector("#the-dojo");
    
// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    for(var i=0; i<theDojo.length; i++) {
        for(var j=0; j<theDojo[i].length; j++) {
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
    return result;
}
    
// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
    // Sum of ninjas in adjacent cells 
    var ninjaCount = 0;
    
    // if (i == 0) {
    //     var startRow = 0;
    // }
    // else {
    //     var startRow = i - 1;
    // }

    // var endRow = i < theDojo.length - 1 ? i + 1 : i

    // var endCol = j < theDojo[row].length - 1 ? j + 1 : j

    for (var row = i - 1; row <= i + 1; row++) {
        for (let col = j - 1; col <= j + 1; col++) {
            console.log(`row: ${row} \n col: ${col} \n value: ${theDojo[i][j]}`);
            ninjaCount += theDojo[row][col];
        }
    }
    console.log(ninjaCount);
    element.innerText = ninjaCount;
    return ninjaCount;


    // if (i == 0) {
    //     var y = 0;
    // }
    // else {
    //     var y = i - 1
    // }

    // if (j == 0) {
    //     var x = 0;
    // }
    // else {
    //     var x = j - 1;
    // }

    // // Check rows from one above selected tp one below 
    // for(y; i < theDojo.length - 1 ? (y <= i + 1) : (y <= i); y++) {

    //     // Check columns in each row from one to the left of selected to one to the right
    //     for(x; j < theDojo[y].length - 1 ? (x <= j + 1) : (x <= j); x++) {

    //         // Print current coordinate 
    //         console.log(x, y);

    //         // Checks that element is not the selected one
    //         if (x != j || y != i) {
    //             ninjaCount += theDojo[y][x];
    //         }
    //     }
    // }
    // return ninjaCount;

    // console.log({i, j});
    // alert("TODO - determine how many ninjas are hiding in adjacent squares");
}
    
// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    

