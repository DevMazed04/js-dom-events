console.log("welcome!!! js dom events");

function showGreen() {
    document.body.style.backgroundColor = 'green';
}

// getMyButton.setAttribute("style", "cursor:pointer");
// getMyButton.setAttribute("onclick", "document.body.style.backgroundColor ='wheat'");

const getMyButton = document.getElementById('show-yellow');
getMyButton.style.cursor = "pointer";

getMyButton.setAttribute("onclick", "myFunction()");
function myFunction() {
    document.body.style.color = "brown";
    document.body.style.backgroundColor = "yellow";
}
