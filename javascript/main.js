/*
Using JS mainly for the pricing/scheduling pg.
The goal is to use the html/css to list the pricings & times. 
Have JS use a clicking event listener and then do something. 
    - Return the price the user selects back to them asking them to confirm or cancel.
    - Then returning a new message stating 'Ok X, we'll see you on MM/DD at HH:MM. Can't wait to see you then!'
Possibly create a 'Grand Opening' promo deal so I get to with play with boolean values.
*/

// Test Code
let TEST = 'Testing---Testing---How you doin?';
alert(TEST);


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

/* An event listener which will return the user's date & time after they have made their selected selection.
This will be linked to the buttons that are at the bottom of each price selection. */

//EX. (So none of this will do anything, it's just examples!)
// button.addEventListener('click', function() {
//     console.log(click);
// })

//------ Menu Pg ------



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


