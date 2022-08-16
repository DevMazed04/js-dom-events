console.log("welcome!!! js dom events");

//we will use this
function showGreen() {
    document.body.style.backgroundColor = 'green';
}


/* ---------------------- option-3: direct whole fuction ---------------------- */
const getWheatButton = document.getElementById('show-wheat');
getWheatButton.onclick = function wheatBackground() {
    document.body.style.backgroundColor = 'wheat';
}
/* ----------- option-3.5 just function name with no call ----------- */
const getPurpleButton = document.getElementById('show-purple');
getPurpleButton.onclick = purpleBackground;
function purpleBackground() {
    document.body.style.backgroundColor = 'purple';
}



/* ---------------------- option-4 (mine--setAttribute) ---------------------- */
const getMyButton = document.getElementById('show-yellow');
getMyButton.style.cursor = "pointer";

// getMyButton.setAttribute("onclick", "document.body.style.backgroundColor ='wheat'");
getMyButton.setAttribute("onclick", "myFunction()");
function myFunction() {
    // document.body.style.color = "brown";
    document.body.style.backgroundColor = "yellow";
}

/* ----------- option-5 using addEventListener ----------- */
const pinkButton = document.getElementById('show-pink');

/* pinkButton.addEventListener('click', pinkBackground);
function pinkBackground() {
    document.body.style.backgroundColor = 'pink';
} */

pinkButton.addEventListener('click', function pinkBackground() {
    document.body.style.backgroundColor = 'pink';
})

/* ----- option-6 using addEventListener directly without variable ----- */
// we will use this:
document.getElementById('show-goldenrod').addEventListener('click', function goldenrodBackground() {
    document.body.style.backgroundColor = 'goldenrod';
});

