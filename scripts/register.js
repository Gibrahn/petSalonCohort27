//create constructor

function Pet(name, age, gender, contact, service) {
    this.petName = name;
    this.petAge = age;
    this.petGender = gender;
    this.petContact = contact;
    this.petService = service;
}

// get the info from the inputs
let inputPetName=document.getElementById("txtPetName");
let inputPetAge=document.getElementById("txtPetAge");
let inputPetGender=document.getElementById("txtPetGender");
let inputPetContact=document.getElementById("txtPetContact");
let inputPetService=document.getElementById("txtPetService");


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
    console.log(inputPetName.value, inputPetAge.value, inputPetGender.value, inputPetContact.value, inputPetService.value); 
    // create the obj
    let thePet = new Pet(inputPetName.value, inputPetAge.value, inputPetGender.value, inputPetContact.value, inputPetService.value);
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
            <p> Gender: ${petSalon.pets[i].petGender} <p>
        </div>
        `;
    }
    document.getElementById("pets").innerHTML=tmp;
    //display the template on html
}

function init(){
    let loki = new Pet("Loki", 4,"Male", "888-888-8888", "Grooming");
    let lobo = new Pet("Lobo", 13,"Male", "888-888-8888", "Grooming");
    petSalon.pets.push(loki, lobo);
    displayPets();
}

window.onload=init;