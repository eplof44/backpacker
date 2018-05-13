$(document).ready(function () {
  getTrips()
  displayTripItems()
})

//create Javascript model object
function Trip(trip) {
    this.id = trip.id
    this.location = trip.location
    this.duration = trip.duration
    this.backpack_size = trip.backpack_size
    trip.camping_type = trip.camping_type
    trip.weather = trip.weather
    trip.user = trip.user
    trip.items = trip.items
}

//create protoytype method to generate link to trip to show trips on index page with a link
Trip.prototype.indexTemplate = function() {
    let tripHtml = `
    <a href="/trips/${ this.id }" data-id="${this.id}">
      <li>${ this.location }</li>
    </a>
    `
    return tripHtml
}



//render all trips via json
function getTrips() {
    $("a.all-trips").on("click", function(e) {
        e.preventDefault()
        $('#trips-container').html('')

        $.getJSON(this.href, function(tripsData) {
            renderTrips(tripsData)
        })
    })
}

//append trip link to dom when index trips are loaded
function renderTrips(tripsData) {
    tripsData.forEach(trip => {
        let newTrip = new Trip(trip)
        let tripHtml = newTrip.indexTemplate()
        $('#trips-container').append(tripHtml)

    })
}

Trip.prototype.showItemTemplate = function() {
  let itemHTML = `<u>${ this.name }</u>`
  this.items.forEach(function(item){

    let id = this.id
    let itemId = item.id
    let itemHTML = `<p><a href="/items/${itemId}">${item.name}</a></p>`
  })
}

function displayTripItems(){
  $(document).on('click', 'a.show-items', function(e){
    e.preventDefault();
    console.log("is this working?");
    let id = $(this).attr('data-id')
    $.getJSON(`/items/${id}.json`, appendShowItems)
  })
}

function appendShowItems(data){
  let newItem = new Item(data)
  // let tripHtml  = newItem.showItemTemplate()

}


//trip show page previous button
$(function () {
  $(".js-back").on("click", function(e) {

    var backId = parseInt($(".js-next").attr("data-id")) - 1;
    $.getJSON("/trips/" + backId + ".json", function(data) {


      $(".tripLocation").text(data["location"]);
      $(".tripDate").text(data["date"]);
      $(".tripDuration").text(data["duration"]);
      $(".tripBackpack").text(data["backpack_size"]);
      $(".tripType").text(data["camping_type"]);
      $(".tripWeather").text(data["weather"]);
      // $(".tripWeight").text(data["current_backpack_weight"]);

      // re-set the id to current on the link
      $(".js-back").attr("data-id", data["id"]);

    });
  });
})

//trip show page next button
$(function () {
  $(".js-next").on("click", function(e) {

    var nextId = parseInt($(".js-next").attr("data-id")) + 1;
    $.getJSON("/trips/" + nextId + ".json", function(data) {


      $(".tripLocation").text(data["location"]);
      $(".tripDate").text(data["date"]);
      $(".tripDuration").text(data["duration"]);
      $(".tripBackpack").text(data["backpack_size"]);
      $(".tripType").text(data["camping_type"]);
      $(".tripWeather").text(data["weather"]);
      // $(".tripWeight").text(data["current_backpack_weight"]);
      $(".tripItems").text(data["ah"]);
      // re-set the id to current on the link
      $(".js-next").attr("data-id", data["id"]);
    });
  });
})
