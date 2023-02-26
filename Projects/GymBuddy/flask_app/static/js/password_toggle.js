function togglePassword(targetID) {
    var x = document.getElementById(targetID);
    if (x.type === "password") {
        x.type = "text";
    } 
    else {
        x.type = "password";
    }
}

console.log('test');
