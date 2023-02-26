// Creating a function to add and remove item from list
function addRemoveItem(id, response) {
    if (response) {
        document.querySelector('#new-connections').innerText++;
    }
    document.querySelector('#total-connections').innerText--;
    document.querySelector(id).remove();
}

function switchName(id) {
    if (document.querySelector(id).innerText == "Jane Doe") {
        document.querySelector(id).innerText = "Nima Bazofti";
    }
    else {
        document.querySelector(id).innerText = "Jane Doe"
    }
}

