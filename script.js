const grid = document.getElementById('sectionGrid');

var contact ={
  'cname' : [],
  'cemail' : [],
  'cimage' : [],
  'cphone' : []
};

window.onload = function(){

let i=0;
let name = document.getElementById('inputedName');
let email= document.getElementById('inputedEmail');
let phone= document.getElementById('inputedNumber');
let image = document.getElementById('inputedImage');
var button = document.getElementById('create-Contact');
var sectionGridDivElements;
var elements = ['img', 'h4', 'p', 'pre', 'input'];

//function appendDiv creates new div for added contact
function appendDiv(){
  
  var sectionGridDiv = document.createElement("DIV");
grid.appendChild(sectionGridDiv);
grid.getElementsByTagName('div')[i].setAttribute('class', 'sectionGridDiv'); 

  for( n in elements){
  sectionGridDivElements = document.createElement(elements[n]);
    sectionGridDiv.appendChild(sectionGridDivElements); 
}
document.getElementsByTagName('img')[i].setAttribute('src', image.value);
document.getElementsByTagName('h4')[i].appendChild((document.createTextNode(name.value)));
document.getElementsByTagName('p')[i].appendChild((document.createTextNode(phone.value)));
document.getElementsByTagName('pre')[i].appendChild((document.createTextNode(email.value)));
sectionGridDiv.getElementsByTagName('input')[i].setAttribute('type', 'submit');
sectionGridDiv.getElementsByTagName('input')[i].setAttribute('value', 'Delete');
var removeContact = sectionGridDiv.getElementsByTagName('input')[i];
}

 //function contactArray adds details of each contact in an array
 function contactArray(){
  
  contact['cname'].push(name.value);
  contact['cemail'].push(email.value);
  contact['cphone'].push(phone.value);
  contact['cimage'].push(image.value);
}
 

button.addEventListener('click', (e)=>{
  e.preventDefault();

  appendDiv();
  contactArray();

  //reset the input text boxes
name.value='';
email.value='';
phone.value='';
image.value='';
i++; //increment to create new independent elements
console.log(i);
})
}

function deleteContact(){
  contact['cname'].splice(indexOf(i),1);
  contact['cemail'].splice(indexOf(i),1);
  contact['cphone'].splice(indexOf(i),1);
  contact['cimage'].splice(indexOf(i),1);
}
removeContact.addEventListener('click', (e)=>{
    e.preventDefault();
    deleteContact();
})
