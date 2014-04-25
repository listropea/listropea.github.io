/* psuedo code:

Modal Windows: This will hide the content in menu items and then content show when clicked
Hide menu items content
When clicking menu items show hidden content
When clicking off of menu item area close out of window

Gallery/Blog: This will make images in gallery show blog title when hovered over
When menu item 'see' is clicked open new page
View photos in grid
When photo is hovered over pull title of blog to show up over image
When clicking on photo take to blog post

*/

/* HIDE MENU FOR MOBILE */

$('#toggleMenu').on('click', function() {
    $('#menu ul').toggleClass('show');
});


