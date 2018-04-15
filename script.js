var button = document.getElementById('create-Contact');
const grid = document.getElementById('sectionGrid');
var elements = ['img', 'h3', 'p', 'pre', 'input'];
var sectionGridDiv, deleteButton;

window.onload= function(){
    let name = document.getElementById('inputedName');
let email = document.getElementById('inputedEmail');
let phone = document.getElementById('inputedNumber');
let image = document.getElementById('inputedImage');
 
button.addEventListener('click', addContact);
function addContact(e){
     e.preventDefault();
     sectionGridDiv= document.createElement('div');
     grid.appendChild(sectionGridDiv);
    sectionGridDiv.setAttribute('class','sectionGridDiv');
    
     for( n in elements){
          sectionGridDiv.appendChild(document.createElement(elements[n])); 
        }
      deleteButton = sectionGridDiv.getElementsByTagName('input')[0];
      deleteButton.setAttribute('type', 'submit');
      deleteButton.setAttribute('value', 'Delete');
      
      sectionGridDiv.getElementsByTagName('img')[0].setAttribute('src',image.value);
      sectionGridDiv.getElementsByTagName('h3')[0].appendChild(document.createTextNode(name.value));
      sectionGridDiv.getElementsByTagName('p')[0].appendChild(document.createTextNode(phone.value));
      sectionGridDiv.getElementsByTagName('pre')[0].appendChild(document.createTextNode(email.value));
    
      name.value='';
      email.value='';
      phone.value='';
      image.value='';
      deleteContact();
      }
      function deleteContact(){
    deleteButton.addEventListener('click', (evt)=>{
        evt.preventDefault();
        var deletedContact = evt.target.parentNode;
        console.log(deletedContact);
        deletedContact.style.display='none';
     })
}
}
