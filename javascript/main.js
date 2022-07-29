//------ Collapsable Nav -----

/* Allows for the nav to collapse into a burger nav on smaller  screens.*/

console.log("Script linked!");

function collapseNav (){
    document.getElementById("navCtrl").classList.toggle("open");
}
let n = document.getElementById('btn--burg');
n.onclick = collapseNav;



//------ Schedule Pg ------

/* An click event which will return the user's info after they have made their selections and verifies the user's name. 
In the future I plan to get all of the form elements verified. */

function rtnInfo() {
    let confName = document.getElementById("name").value;
    let confirmInfo = false;
    while(confirmInfo == false) {
        let confName = prompt("Ope, looks like we're missing some info! Please enter a name.") 
        if (confirm ("Please confirm your name is " + confName + ".")){ 
        alert("Thanks "+confName+", we can't wait for you to come see us!");
        confirmInfo = true;
    }
    }
};



