//create constructor
let x=0;
function Pet(name, age, gender, contact, service, paymentMethod) {
    this.petName = name;
    this.petAge = age;
    this.petGender = gender;
    this.petContact = contact;
    this.petService = service;
    this.petPayment = paymentMethod;
    this.id=x++;
}

// get the info from the inputs
let inputPetName=document.getElementById("txtPetName");
let inputPetAge=document.getElementById("txtPetAge");
let inputPetGender=document.getElementById("txtPetGender");
let inputPetContact=document.getElementById("txtPetContact");
let inputPetService=document.getElementById("txtPetService");
let inputPetPayment=document.getElementById("txtPetPayment");


function isValid(aPet){
    //return false when the pet is not valid
    //return true id the pet is valid
    let valid=true;
    //return the error in the console
    if(aPet.petName.length==0){
        // if we get here it means that the name is not valid
        valid=false;
        console.log("Invalid name")    }
    if(aPet.petAge.length==0){
        valid=false;
        console.log("Invalid age");
    }
    if(aPet.petContact.length==0){
        valid=false;
        console.log("Invalid service");
    }
    if(aPet.petService.length==0){
        valid=false;
        console.log("Invalid contact");
    }
    //validations
    return valid;
}

function register(){
    console.log(inputPetName.value, inputPetAge.value, inputPetGender.value, inputPetContact.value, inputPetService.value, inputPetPayment.value); 
    // create the obj
    let thePet = new Pet(inputPetName.value, inputPetAge.value, inputPetGender.value, inputPetContact.value, inputPetService.value, inputPetPayment.value);
    console.log(thePet);

    if(isValid(thePet)){
        //pushthe object
        petSalon.pets.push(thePet)
        //display object on html
        displayPets();
    }    
}

function displayPets(){
    //travel the array
    let tmp="";
    for(let i=0; i<petSalon.pets.length;i++){
        //create template
        tmp+= `
        <div class ="pet">
            <p> ${petSalon.pets[i].petName} <p>
            <p> Age: ${petSalon.pets[i].petAge} <p>
            <p> Gender: ${petSalon.pets[i].petGender} <p>
            <p> Contact: ${petSalon.pets[i].petContact} <p>
            <p> Service: ${petSalon.pets[i].petService} <p>
            <p> Payment Method: ${petSalon.pets[i].petPayment} <p>
        </div>
        `;
    }
    document.getElementById("pets").innerHTML=tmp;
    //display the template on html
}

function displayPetsTable(){
    //travel the array
    let row="";
    for(let i=0; i<petSalon.pets.length;i++){
        //create template
        row+= `
        <tr id="${petSalon.pets[i].id}">
            <td>${petSalon.pets[i].petName}</td>
            <td>${petSalon.pets[i].petAge}</td>
            <td>${petSalon.pets[i].petGender}</td>
            <td>${petSalon.pets[i].petGender}</td>
            <td>${petSalon.pets[i].petService}</td>
            <td>${petSalon.pets[i].petPayment}</td>
            <td> <button class="btn btn-danger" onclick="deletePet(${petSalon.pets[i].id});">Delete</button> </td>
        </tr>
        `;
    }
    document.getElementById("petsTable").innerHTML=row;
    //display the template on html
}

function deletePet(petId){
    console.log("Delete pet", petId);
    // travel the array to search the petId
    for(let i=0; i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(pet.id==petId){
            deleteIndex=i;
            console.log("I found the pet...", deleteIndex   );
        }
    }
    //remove the pet from the array
    petSalon.pets.splice(deleteIndex, 1);
    //remove pet from html
    document.getElementById(petId).remove();
}

function searchPet(){
    let searchString = document.getElementById("txtSearch").value;
    console.log(searchString);
    for(let i=0; i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(pet.petName.toLowerCase()==searchString.toLowerCase()){
            deleteIndex=i;
            console.log("I found it");
            document.getElementById(pet.id).classList.add(`bg-color`);
        }
    }
   
}
function init(){
    let loki = new Pet("Loki", 4,"Male", "888-888-8888", "Grooming", "Credit Card");
    let lobo = new Pet("Lobo", 13,"Male", "888-888-8888", "Grooming", "Cash");
    petSalon.pets.push(loki, lobo);
    displayPets();
    displayPetsTable();
    searchPet();
}

window.onload=init;