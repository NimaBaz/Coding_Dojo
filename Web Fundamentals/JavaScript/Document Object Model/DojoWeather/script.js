function over(img) {
    img.src = "succulents-2.jpg";    
}

function out(img) {
    img.src = "succulents-1.jpg";    
}

function cityReport(element) {
    alert('Loading Weather Report...')
}

function removeAlert(id) {
    document.querySelector(id).remove();
}

function cToF(id) {
    var cTemp = parseFloat(id);
    document.querySelector(id).innerHTML = (id * 1.8) + 32;
}

function fToC(id) {
    var cTemp = parseFloat(id);
    document.querySelector(id).innerHTML = (id - 32) / 1.8;
} 

