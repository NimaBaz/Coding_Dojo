childHeight = 6;
function displayIfChildIsAbleToRideTheRollerCoaster() {
    if (childHeight > 52) {
        console.log("Get on that ride, kiddo!");
    }
    else {
        console.log("Sorry kiddo. Maybe next year.");
    }
}
// Changing the value of childHeight will change the answer.
displayIfChildIsAbleToRideTheRollerCoaster()