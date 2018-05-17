Specifications for the Rails with jQuery Assessment
Specs:

 [x]Use jQuery for implementing new requirements
 [x]Include a show resource rendered using jQuery and an Active Model Serialization JSON backend.
    Rendered both trips show page and items show page using jQuery GET request which loads JSON
    data from the server and included active model serialization. This is called when a user clicks on
    the next or previous buttons on the items or trips show page.
 [x]Include an index resource rendered using jQuery and an Active Model Serialization JSON backend.
    Rendered both my trips index page and items index page using jQuery GET request which loads
    JSON data from the server and included active model serialization.
 [x]Include at least one has_many relationship in information rendered via JSON and appended to the DOM.
    A trip has many associated items. These are rendered via json and appended to the DOM when
    clicking the next/previous button through the trips show pages.
 [x]Use your Rails API and a form to create a resource and render the response without a page refresh.
    A user can create an item or a trip and the object will be serialized and submitted via an AJAX POST
    request. The object is then added to the users list of items/trips.
 [x]Translate JSON responses into js model objects.
    Both trip and items are translated into js model objects.
 [x]At least one of the js model objects must have at least one method added by your code to the prototype.
      Both trip and items model objects both have prototype methods (indexTemplate, showTemplate) that translates
      formatted information to DOM.

Confirm

 [x]You have a large number of small Git commits
 [x]Your commit messages are meaningful
 [x]You made the changes in a commit that relate to the commit message
 [x]You don't include changes in a commit that aren't related to the commit message
