$(document).ready(function () {
  getItems()
})

//create object model for item
function Item(item) {
    this.id = item.id
    this.name = item.name
    this.item_weight = item.item_weight
    this.value = item.value
}

//create protoytype method to generate link to item to show items on index page with a link

Item.prototype.indexTemplate = function() {
    let itemHtml = `
    <a href="/items/${ this.id }" data-id="${this.id}">
      <li>${this.name}</li>
    </a>
    `
    return itemHtml
}

//render all items via json
function getItems() {
    $("a.all-items").on("click", function(e) {
        e.preventDefault()
        $('#items-container').html('')

        $.getJSON(this.href, function(itemsData) {
            renderItems(itemsData)
        })
    })
}

//append item link to dom when index trips are loaded

function renderItems(itemsData) {
    itemsData.forEach(item => {
        let newItem = new Item(item)
        let itemHtml = newItem.indexTemplate()
        $('#items-container').append(itemHtml)
    })
}

//show next item button
$(function () {
  $(".js-items-next").on("click", function() {
    var nextId = parseInt($(".js-items-next").attr("data-id")) + 1;
    $.get("/items/" + nextId + ".json", function(data) {
      $(".itemName").text(data["name"]);
      $(".itemWeight").text(data["item_weight"]);
      $(".itemValue").text(data["value"]);
      // re-set the id to current on the link
      $(".js-items-next").attr("data-id", data["id"]);
    });
  });
});

//show previous item button

$(function () {
  $(".js-items-back").on("click", function() {
    var backId = parseInt($(".js-items-next").attr("data-id")) - 1;
    $.get("/items/" + backId + ".json", function(data) {
      $(".itemName").text(data["name"]);
      $(".itemWeight").text(data["item_weight"]);
      $(".itemValue").text(data["value"]);
      // re-set the id to current on the link
      $(".js-items-back").attr("data-id", data["id"]);
    });
  });
});

//show item on post page for new item creation
Item.prototype.showItem = function(){
  item = `<h2>${this.name}</h2>
  <h2>Weight: ${this.item_weight}</h2>
  <h2>Value: ${this.value}</h2>`
  return item
}

//create new item via json post 
$(function (){
  $(document).on('submit', '#new_item', function(e){
    e.preventDefault();
    const formPostUrl = $(this).attr("action")
    const formData = $(this).serialize();
    $.ajax({
      url: formPostUrl,
      method: 'post',
      data: formData,
      success: function(data) {
        const newItem = new Item(data);
        const showNewItem = newItem.showItem();
        $("div#itemResult").append(showNewItem)
        $('#new_item')[0].reset();
      },
      error: function(response) {
        $('div#reviewErrors').html("Sorry, there was an error. Please try again.")
      }
    });
  });
})
