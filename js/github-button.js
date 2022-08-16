console.log("github like delete confirmation button");

document.getElementById("del-btn").addEventListener("click", function () {
    const secretData = document.getElementById("secret-data");
    const inputField = document.getElementById("input-field");
    const inputText = inputField.value;

    if (inputText !== 'DELETE') {
        const alertMssg = alert(
            "please! type DELETE to delete the data"
        );
        inputField.value = null;
        return alertMssg;
    }
    else {
        const confirmMssg = confirm("are you sure to delete this data?");
        if (confirmMssg == true) {
            secretData.innerText = null;
            inputField.value = null;
        } else {
            inputField.value = null;
        }
    }
});



















/*  if (alertMssg !== "DELETE") {
     return alertMssg;
 } else {
     if (inputText !== "DELETE") {
         return alertMssg;
     } else {
         const confirmMssg = confirm("are you sure to delete this data?");
         if (confirmMssg) {
             secretData.innerText = null;
             inputField.value = null;
         } else {
             inputField.value = null;
         }
     }
 }
*/
    //    if(secretText ==)

/*  const confirmation = confirm('are you sure to delete this data?');
 
   if (confirmation) {
       secretData.innerText = null;
   }
   else {
       secretData.innerText = secretData.innerText;
   } */

