// $(document).ready(function () {
//
//   getItems()
// })
//
// function Item(item) {
//     this.id = item.id
//     this.name = item.name
//     this.item_weight= this.item_weight
//     this.value = item.value
// }
//
// //create protoytype method to generate link to trip to show trips on index page with a link
// Item.prototype.indexTemplate = function() {
//     let itemHtml = `
//     <a href="/item/${ this.id }" data-id="${this.id}">
//      <li> ${ item.name }</li>
//     </a>
//     `
//     return itemHtml
// }
//
// //render all trips via json
// function getItems() {
//     $("a.backpack-details").on("click", function(e) {
//         e.preventDefault()
//         $('.backpack-container').html('')
//
//         $.getJSON(this.href, function(itemsData) {
//             renderItems(itemsData)
//         })
//     })
// }
//
// //append trip link to dom when index trips are loaded
// function renderItems(itemsData) {
//   console.log(itemsData)
//     itemsData.forEach(item => {
//         let newTrip = new Trip(item)
//         let itemHtml = newItem.indexTemplate()
//         $('.backpack-container').append(itemHtml)
//     })
// }
