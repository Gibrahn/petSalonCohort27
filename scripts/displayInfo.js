//create an object literal for the pet salon
const petSalon ={
    name:"Pet Cleaning Services",
    address:{
        street:"Palm Avenue",
        number: "610",
        zipCode: "92154",
        city: "Tijuana",
        State:"B.C",
    },
    workingHours:{
        open: "9:00 am",
        close: "5:00 pm"
    },
    pets:[]
}

console.log(petSalon.address.zipCode);

//display servic on console
//console.log(petSalon.pets[0].service);

function displayPetSalonInfo(){
    document.getElementById("petSalon-info").innerHTML = ` Welcome to ${petSalon.name} | ${petSalon.workingHours.open} - ${petSalon.workingHours.close} `;
}

// function displayPetInfo(){
//     document.getElementById("displayName").innerHTML += ` ${petSalon.pets[0].name} `;

//     for(let x=0;x<petSalon.pets[0].length;x++){
//         //display the task
//         document.getElementById("displayName").innerHTML+=`
//         <li id="${x}"> ${petSalon.pets[x]}
//         `;
//     }
// }
displayPetSalonInfo();
// displayPetInfo();
// display pet salon info in the footer section of the html
