// 
// //create object of item
// function Item(item) {
//   this.id = item.id
//   this.name = item.name
//   this.item_weight = item.item_weight
//   this.value = item.value
// }
//
// //prototype
//
// Item.prototype.indexTemplate = function() {
//     let itemHtml = `
//     <a href="/items/${ this.id }" data-id="${this.id}">
//       <h3>${ this.name }</h3>
//     </a>
//     `
//     return itemHtml
// }
//
// $(function () {
//   $(".all-items").on("click", function(e) {
//     e.preventDefault()
//
//     $.get(this.href + ".json", function(data) {
//       var $ol = $("div.items-container ol")
//       $ol.html("")
//       data.forEach(function(item) {
//           $ol.append(tripHtml)
//
//       });
//     });
//   });
// });
