Welcome to my website for the Chicken Scratch Cafe!
=============

The Chicken Scratch Cafe is a fictional business (though it's real in my heart) that I created to use as practice in front end web development. The main objectives with this project is to showcase what I've learned so far in html5, CSS, CSS Grid & vanilla Javascript. 

### Once on the website the user should be able to go to... ### 
-   See a clean and appealing layout. 
-   Be able to navigate to the other pgs, and see a color change while hovering over the pg links.
-   See a color change while hovering over buttons.
-   Make a "reservation" using the form on the 'Scheduling' page.
-   On the 'About' page the name of each chicken pops up over the image while hovering over their pics.
-   Be able to see a change in layput when resizing the webpage.
-   This includes seeing the navigation menu condense down into a 'burger' menu.
-   Fill out the forms to "set up" a visit. The forms will notify the user if their info is in the wrong format.
-   Once the user hits submit for their visit the webpage will confirm the info with an alert. 


### Project Goals: ###
* Use JS 3 ways
    - Return input to the user in an alert via a form. 
    - Validate the info.
    - Used to show and hide collapsible navigation menu.
* Use CSS 3 Ways
    - Also used in the collapsible navigation menu.
    - Created a banner animation which displays the chicken's names.
    - Primarily used CSS grid for media queries. 
* Levels of media queries.
    - Mobile, 768px and 1024px.

### Function & Aesthetics Goals: ###
* Main Pg
    - Navigation menu is collapsable at all screens. 
    *(As of 7/28 there were issues getting the navigation bar to not hide completely when setting the button display to 'none'.)*
    - Use CSS grid to go from 1 column in the footer and main content divs on smaller screens to 2 columns for the divs and two columns at <768px then 4 columns at <1024pxfor the footer.

* About Pg
    - Use CSS grid to go from 1 column on small screens, then 3 columns on larger screens.
    - Use CSS to create an animation which shows each chicken's name across their image.
    *(As of 7/28 the banner is not in the location it was intended to be in and pops up when the cursor is anywhere near the pic instead on only when it's on the pic.)*

* Scheduling Pg
    - Use HTML to create a form which the user can fill out. 
    - Use JavaScript to return the information that was entered to confirm that it's correct/ not null.
    (*As of 7/25 I can only get this to work for the name field and it only confirms that the field isn't blank on the first try.)*

* Menu Pg
    - It was originally created as filler since you can't have a cafe without a menu. It's just CSS practice.
    *(As of 7/28 the menu pg is nothing fancy.)*


### Future Plans... ###
There are some updates I hope to add after spending more time with this project. 

- [ ] Have the form hold more user input and return all input via the alert. 
- [ ] Validate at least 2 other fields in the form.
- [ ] Tighten up the layout with CSS.
- [ ] Get the chicken name banners in the correct places. 
- [ ] Add CSS to have links change color after viewing a pg. *(Had this feature working previously but it was very fragile.)*
- [ ] There's some shapes I want to add behind the images on each pg. As of 7/28 I could make the shapes and get them in the correct spot but couldn't get them behind the images. 
- [ ] Need to resize all images. 


### UPDATES MADE AFTER 8/20 ###
- Fixed nav to stay open for largest media query. 
*However, the nav can disappear. To fix this the window has to be made  smaller then open the nav using the button. 