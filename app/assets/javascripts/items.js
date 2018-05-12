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
