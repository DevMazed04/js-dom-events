console.log('most common event handler that we will use');

function function1() {
    const h3Original = document.getElementById('h3');
    h3Original.innerText = 'Updated by onclick attribute: Never Give Hope Man!!!';
}

document.getElementById('dAndC').addEventListener('click', function () {
    document.getElementById('h3').innerText = 'Updated by addEventListener: You will successful, keep going!!!!';
});



function clickMe() {
    const p = document.getElementById('p');
    // const pText = p.innerText;

    const inputField = document.getElementById('input-text');
    const inputText = inputField.value;

    p.innerText = inputText;
    inputField.value = null;


    /*  if (inputText == '') {
         p.innerText = pText;
     } */
}


document.getElementById('update-button').addEventListener('click', function () {
    const p = document.getElementById('p');
    const inputField = document.getElementById('input-text');

    p.innerText = inputField.value;
    inputField.value = '';

})