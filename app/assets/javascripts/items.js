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
      <h3>${ item.name}</h3>
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
