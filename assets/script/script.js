var button = document.getElementById('createContact');
const grid = document.getElementById('sectionGrid');
var elements = ['button', 'h3', 'input'];
var elementsForModal = ['img', 'h3', 'p', 'pre'];
var elementsForEditModal = ['input', 'input', 'input', 'input', 'input'];
var i;

 var modal, contactDetails, closeModal, contactDetailsDiv;
 var modalName, modalImage, modalEmail, modalPhone;
 var editModal, detailsToEdit, closeEditModal, editContactDetailsDiv;
 var contactArray = {
    "name": [],
    "phone": [],
    "email": [],
    "image": []
};


var editButton, nameDirectory, sectionGridDiv, deleteButton;

window.onload= function(){
    i=0;
    let name = document.getElementById('inputedName');
let email = document.getElementById('inputedEmail');
let phone = document.getElementById('inputedNumber');
let image = document.getElementById('inputedImage');

button.addEventListener('click', addContact);
function addContact(e){
    //  e.preventDefault();

     sectionGridDiv= document.createElement('div');
     modal = document.createElement('div');
     contactDetails = document.createElement('div');
     closeModal = document.createElement('span');
     contactDetailsDiv = document.createElement('div');
     
     grid.appendChild(sectionGridDiv);
    sectionGridDiv.setAttribute('class','sectionGridDiv');
    sectionGridDiv.setAttribute('data-id', i);
     for( n in elements){
          sectionGridDiv.appendChild(document.createElement(elements[n])); 
        }
     nameDirectory = sectionGridDiv.getElementsByTagName('h3')[0];
       
     //for Display modal
        sectionGridDiv.appendChild(modal);        
        modal.setAttribute('class', 'modal');
        modal.setAttribute('id','myModal');
        modal.appendChild(contactDetails);
        contactDetails.setAttribute('class', 'modal-content');
        contactDetails.appendChild(closeModal);
        closeModal.setAttribute('class', 'close');
        closeModal.appendChild(document.createTextNode('x'));
  
      deleteButton = sectionGridDiv.getElementsByTagName('input')[0];
      deleteButton.setAttribute('type', 'submit');
      deleteButton.setAttribute('value', 'Delete');
      editButton = sectionGridDiv.getElementsByTagName('button')[0];
      
      contactArray.name.push(name.value);
      contactArray.email.push(email.value);
      contactArray.phone.push(phone.value);
      contactArray.image.push(image.value);

      sectionGridDiv.getElementsByTagName('h3')[0].appendChild(document.createTextNode(contactArray.name[i]));

      contactDetails.appendChild(contactDetailsDiv);

      for( n in elementsForModal){
          contactDetailsDiv.appendChild(document.createElement(elementsForModal[n])); 
      }

      modalImage = contactDetailsDiv.getElementsByTagName('img')[0];
      modalImage.setAttribute('src', contactArray.image[i]);
      modalName= contactDetailsDiv.getElementsByTagName('h3')[0];
      modalName.innerHTML = contactArray.name[i];
      modalPhone = contactDetailsDiv.getElementsByTagName('p')[0];
      modalPhone.innerHTML = contactArray.phone[i];
      modalEmail = contactDetailsDiv.getElementsByTagName('pre')[0];
      modalEmail.innerHTML = contactArray.email[i];


  
        runModal();

      editContact();
      deleteContact();

      name.value='';
      email.value='';
      phone.value='';
      image.value='';
      i++;
      
 }
     
      
      
      function deleteContact(){
    deleteButton.addEventListener('click', (evt)=>{
        evt.preventDefault();
        var deletedContact = evt.target.parentNode;
        var divNo = deletedContact.getAttribute('data-id');
        contactArray.name.splice(divNo, 1);
        contactArray.phone.splice(divNo, 1);
        contactArray.image.splice(divNo, 1);
        contactArray.email.splice(divNo, 1);
        grid.removeChild(deletedContact);
      })
      }

 
      


    //modal-function

    function runModal(){

    nameDirectory.onclick = function(e){
        var selectedDiv = e.target.parentNode;
        console.log(selectedDiv);
        var modal = selectedDiv.getElementsByClassName('modal')[0];
        var span = modal.getElementsByClassName("close")[0];

        modal.style.display ='block';

        span.onclick = function() {
            modal.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    
    }
    
}

      function editContact(){

              //for Edit Modal
              editModal = document.createElement('div');
              detailsToEdit = document.createElement('div');
              closeEditModal = document.createElement('span');
              editContactDetailsDiv = document.createElement('div');
      
              sectionGridDiv.appendChild(editModal);        
              editModal.setAttribute('class', 'modal');
              editModal.setAttribute('id','myModal');
              editModal.appendChild(detailsToEdit);
              detailsToEdit.setAttribute('class', 'modal-content');
              detailsToEdit.appendChild(closeEditModal);
              closeEditModal.setAttribute('class', 'close');
              closeEditModal.appendChild(document.createTextNode('x'));
            
              detailsToEdit.appendChild(editContactDetailsDiv);
             
              for(m in elementsForEditModal){
                editContactDetailsDiv.appendChild(document.createElement(elementsForEditModal[m]));
            }
            editContactDetailsDiv.getElementsByTagName('input')[0].setAttribute('value', contactArray.image[i]);
            editContactDetailsDiv.getElementsByTagName('input')[0].setAttribute('placeholder', 'image');
            editContactDetailsDiv.getElementsByTagName('input')[1].setAttribute('value', contactArray.name[i]);
            editContactDetailsDiv.getElementsByTagName('input')[1].setAttribute('placeholder', 'Full Name');
            editContactDetailsDiv.getElementsByTagName('input')[2].setAttribute('value', contactArray.email[i]);
            editContactDetailsDiv.getElementsByTagName('input')[2].setAttribute('placeholder', 'email');
            editContactDetailsDiv.getElementsByTagName('input')[3].setAttribute('value', contactArray.phone[i]);
            editContactDetailsDiv.getElementsByTagName('input')[3].setAttribute('placeholder', 'PhoneNumber');
            editContactDetailsDiv.getElementsByTagName('input')[4].setAttribute('type', 'submit');

            var editSubmit = editContactDetailsDiv.getElementsByTagName('input')[4];
            editButton.onclick = function(e){
                var selectedDiv = e.target.parentNode;
                console.log(selectedDiv);
                var modal = selectedDiv.getElementsByClassName('modal')[1];
                var span = modal.getElementsByClassName("close")[0];
                var no = selectedDiv.getAttribute('data-id');
                modal.style.display ='block';
        
                span.onclick = function() {
                    modal.style.display = "none";
                }
                
                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            
                editSubmit.addEventListener('click', (e)=>{
                    e.preventDefault();
                    let editedImage = editContactDetailsDiv.getElementsByTagName('input')[0];
                    let editedName = editContactDetailsDiv.getElementsByTagName('input')[1];
                    let editedPhone = editContactDetailsDiv.getElementsByTagName('input')[2];
                    let editedEmail = editContactDetailsDiv.getElementsByTagName('input')[3];
    
                    contactArray.name.splice(no,1, editedName.value);
                    contactArray.image.splice(no,1, editedImage.value);
                    contactArray.phone.splice(no,1, editedPhone.value);
                    contactArray.email.splice(no,1, editedEmail.value);

                    modal.style.display = "none";

                    sectionGridDiv.getElementsByTagName('h3')[0].innerHTML = editedName.value;
                    modalImage = contactDetailsDiv.getElementsByTagName('img')[0];
                    modalImage.setAttribute('src', contactArray.image[no]);
                    modalName= contactDetailsDiv.getElementsByTagName('h3')[0];
                    modalName.innerHTML = contactArray.name[no];
                    modalPhone = contactDetailsDiv.getElementsByTagName('p')[0];
                    modalPhone.innerHTML = contactArray.phone[no];
                    modalEmail = contactDetailsDiv.getElementsByTagName('pre')[0];
                    modalEmail.innerHTML = contactArray.email[no];              

                    
          })
            }

            
    }
}
