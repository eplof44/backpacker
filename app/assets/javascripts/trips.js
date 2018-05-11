
$(document).ready(function () {
  getTrips()
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
      <h3>${ this.location }</h3>
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

//trip show page previous button
$(function () {
  $(".js-back").on("click", function(e) {
    e.preventDefault()
    var nextId = parseInt($(".js-next").attr("data-id")) - 1;
    $.getJSON("/trips/" + nextId + ".json", function(data) {

      let id = data["id"]
      $(".tripLocation").text(data["location"]);
      $(".tripDate").text(data["date"]);
      $(".tripDuration").text(data["duration"]);
      $(".tripBackpack").text(data["backpack_size"]);
      $(".tripType").text(data["camping_type"]);
      $(".tripWeather").text(data["weather"]);
      $(".tripWeight").text(data["current_backpack_weight"]);

      // re-set the id to current on the link
      $(".js-next").attr("data-id", data["id"]);
    });
  });
})

//trip show page next button
$(function () {
  $(".js-next").on("click", function(e) {
    e.preventDefault()
    var nextId = parseInt($(".js-next").attr("data-id")) + 1;
    $.getJSON("/trips/" + nextId + ".json", function(data) {

      let id = data["id"]
      $(".tripLocation").text(data["location"]);
      $(".tripDate").text(data["date"]);
      $(".tripDuration").text(data["duration"]);
      $(".tripBackpack").text(data["backpack_size"]);
      $(".tripType").text(data["camping_type"]);
      $(".tripWeather").text(data["weather"]);
      $(".tripWeight").text(data["current_backpack_weight"]);

      // re-set the id to current on the link
      $(".js-next").attr("data-id", data["id"]);
    });
  });
})



//get items to show on next/previous
// $(function () {
//   $(".backpack-details").on("click", function(e) {
//     e.preventDefault()
//
//     $.get(this.href + ".json", function(data) {
//       var $ol = $("div.backpack-container ol")
//       $ol.html("")
//
//       data.forEach(function(trip) {
//           $ol.append("<li>" + trip.location + "</li>")
//
//       });
//     });
//   });
// });
