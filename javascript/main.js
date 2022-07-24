/*
Using JS mainly for the pricing/scheduling pg.
The goal is to use the html/css to list the pricings & times. 
Have JS use a clicking event listener and then do something. 
    - Return the price the user selects back to them asking them to confirm or cancel.
    - Then returning a new message stating 'Ok X, we'll see you on MM/DD at HH:MM. Can't wait to see you then!'
Possibly create a 'Grand Opening' promo deal so I get to with play with boolean values.
*/

// Test Code
// let TEST = 'Testing---Testing---How you doin?';
// alert(TEST);

//------ All Pgs ------
/* Button hover effect. /*

//------ Main Pg ------

/* An event listener that open the collapsed menu and then closes it back up once the user is done. 
This will be applied @ smaller media queries. 
This is called a 'toggle' and we MIGHT use an icon somehow when using it instead of text. */

//EX. (So none of this will do anything, it's just examples!)
// button.addEventListener('click', function() {
//       const review = document.getElementById('review');
//         if (review.classList.contains('d-none')) {
//             review.classList.remove('d-none');
//             button.textContent = 'CLOSE REVIEW'
//         }
//         else {
//             review.classList.add('d-none');
//             button.textContent = 'SEE REVIEW'
//         }) 
// }

//------ Schedule Pg ------

/* An event listener which will return the user's info after they have made their selections and verifies the user's name. 
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


/* This block worked before I started playing around.
// function rtnInfo() {
//     let confirmInfo = 
//     document.getElementById("Thanks "+"name"+" for coming to see us!").value;
//     alert(confirmInfo);
// };

// document.getElementById("date").value;
//     document.getElementById("time").value;
//     document.getElementById("email").value;

/*-- Get this to work for =<8 people. Get it to work with rtnInfo so it pops up before confirming info--*/
// function conLrgParty() {
//     let lrgParty =
//     document.getElementById("numGuests").value;
//     confirm("Parties of 8 or more have an automatic 20% gratuity charge and can chose to have bottomless coffee upon arrival.")
// }

// , 

/* Need to get the function to return the selected timeslot and 
not just all the slots.*/

//------ Menu Pg ------

//-- Nav --

//------ About Pg ------


//------ Testing Zone ------

//const values =['clean office', 'do dishes', 'read through car warranty'];
//values.push('weed-eat front yard', 'do laundry');
//const first = values.shift();
//const last = values.pop();
//values.unshift('plant seeds', 'clean out coop');
//console.log(values);

// const values = ['rosie', 'eggsie', 'mcchicken', 'stevie'];
// const found = values.find(function(item) {
//     return item.length > 5;
// });
// console.log(found);


