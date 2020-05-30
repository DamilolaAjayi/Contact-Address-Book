const submit = document.getElementById('createContact');
const contactLog = document.querySelector('#sectionGrid');
var trashBtn;

document.body.onload = function(){
    createContact();
}

function createContact(){
    //listener on form submit button
    submit.addEventListener('click', function(evt){
        //prevents page from refreshing
        evt.preventDefault();

        var contactName = document.querySelector("#inputedName");
        var contactEmail = document.getElementById('inputedEmail');
        var contactPhoneNumber = document.getElementById('inputedNumber');
        var contactImage = document.getElementById('inputedImage');

        //edit and delete buttons div
        const contactBtns = document.createElement("DIV");
        contactBtns.setAttribute("id", "contactBtn");

        //container for new contact
        var newContact = document.createElement("DIV");
        newContact.setAttribute("class", "contact");
        //collect values from input
        contactName = contactName.value;
        contactEmail = contactEmail.value;
        contactPhoneNumber = contactPhoneNumber.value;
        contactImage = contactImage.value;

        // console.log(contactLog);
        // console.log(newContact);
        // console.log(contactName);
        // console.log(contactEmail);
        // console.log(contactPhoneNumber);
        // console.log(contactImage);
        
        //add container to contact log grid
        contactLog.appendChild(newContact);
        newContact.appendChild(contactBtns);
        contactBtns.innerHTML = `<i class="fas fa-user-edit"></i><i class="fas fa-trash"></i>`;
      

    });
    trashBtn = document.querySelectorAll(".fa-trash");
    for(var i = 0; i <trashBtn.length ; i++){
        trashBtn[i].addEventListener("click", function(){
            console.log(trashBtn[i]);
            this.target.parentNode.parentNode.remove();
        });
    } 
}



