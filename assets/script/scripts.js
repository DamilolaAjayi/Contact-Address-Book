var contactName = document.querySelector("#inputedName");
var contactEmail = document.getElementById('inputedEmail');
var contactPhoneNumber = document.getElementById('inputedNumber');
var contactImage = document.getElementById('inputedImage');
var submit = document.getElementById('createContact');

window.onload = function(){
    createContact();
}

function createContact(){
    submit.addEventListener('click', function(){
        contactName = contactName.value;
        contactEmail = contactEmail.value;
        contactPhoneNumber = contactPhoneNumber.value;
        contactImage = contactImage.value;

        alert("Working");
    });
}
