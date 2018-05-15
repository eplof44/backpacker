$(document).ready(function () {
  getItems()
})

function Item(item) {
    this.id = item.id
    this.name = item.name
    this.item_weight = item.item_weight
    this.value = item.value
}

Item.prototype.indexTemplate = function() {
    let itemHtml = `
    <a href="/items/${ this.id }" data-id="${this.id}">
      <li>${this.name}</li>
    </a>
    `
    return itemHtml
}

function getItems() {
    $("a.all-items").on("click", function(e) {
        e.preventDefault()
        $('#items-container').html('')

        $.getJSON(this.href, function(itemsData) {
            renderItems(itemsData)
        })
    })
}

function renderItems(itemsData) {
    itemsData.forEach(item => {
        let newItem = new Item(item)
        let itemHtml = newItem.indexTemplate()
        $('#items-container').append(itemHtml)
    })
}

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

Item.prototype.showItem = function(){
  item = `<h2>${this.name}</h2>
  <h2>Weight: ${this.item_weight}</h2>
  <h2>Value: ${this.value}</h2>`
  return item
}

//create new item
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
