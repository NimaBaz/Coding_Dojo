function over(img) {
    img.src = "succulents-2.jpg";    
}

function out(img) {
    img.src = "succulents-1.jpg";    
}

function emptyCart(element) {
    alert('Your Cart is empty!')
}

function removeAlert(id) {
    document.querySelector(id).remove();
}

// Creating a function to add and remove item from list
function addRemoveItem(id, response) {
    if (response) {
        document.querySelector('#new-connections').innerText++;
    }
    document.querySelector('#total-connections').innerText--;
    document.querySelector(id).remove();
}

