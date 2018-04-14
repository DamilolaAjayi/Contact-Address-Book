var button = document.getElementById('create-Contact');
const grid = document.getElementById('sectionGrid');
var elements = ['img', 'h4', 'p', 'pre', 'input'];
var sectionGridDiv, deleteButton;
var contactArray =[];
var i=0;
window.onload= function(){
    let name = document.getElementById('inputedName');
let email = document.getElementById('inputedEmail');
let phone = document.getElementById('inputedNumber');
let image = document.getElementById('inputedImage');
 
button.addEventListener('click', (e)=>{
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
      deleteButton.setAttribute('class', i);
      
      sectionGridDiv.getElementsByTagName('img')[0].appendChild(document.createTextNode(image.value));
      sectionGridDiv.getElementsByTagName('h4')[0].appendChild(document.createTextNode(name.value));
      sectionGridDiv.getElementsByTagName('p')[0].appendChild(document.createTextNode(phone.value));
      sectionGridDiv.getElementsByTagName('pre')[0].appendChild(document.createTextNode(email.value));
    
      contactArray.push(sectionGridDiv);
      name.value='';
      email.value='';
      phone.value='';
      image.value='';
      i++;
    })

    deleteButton.addEventListener('click', (e)=>{
        var divNo = deleteButton.getAttribute('class');
        contactArray.splice(divNo, 1);
    })
 
}
