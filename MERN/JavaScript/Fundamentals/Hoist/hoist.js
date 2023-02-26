// 1 -> undefined
var hello;
console.log(hello);
hello = "world";

// 2 -> magnet
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}

// 3 -> super cool
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// 4 -> chicken and half-chicken
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// 5 -> TypeError: mean is not a function. If we call the function at the bottom we get chicken, chicken, fish, chicken
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean();
console.log(food);

// 6 -> undefined, rock, r&b, disco
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// 7 -> san jose, seattle, burbank, san jose
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// 8 -> TypeError: Asisnment to constant variable. We cannot change the const dojo which was happening on line 78.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        return "Dojo is closed for now";
    }
    return dojo;
}
