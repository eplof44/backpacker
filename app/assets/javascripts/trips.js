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
      $(".trip-items").html("")
      const listItems = data.items.map(item => `<li>${item.name}</li>`).join('')
      $('.trip-items').html(listItems)
      $(".tripLocation").text(data["location"]);
      $(".tripDate").text(data["date"]);
      $(".tripDuration").text(data["duration"]);
      $(".tripBackpack").text(data["backpack_size"]);
      $(".tripType").text(data["camping_type"]);
      $(".tripWeather").text(data["weather"]);
      $(".tripItems").text(data["ah"]);
      // re-set the id to current on the link
      $(".js-next").attr("data-id", data["id"]);
    });
  });
})

//show trip on new trip form
Trip.prototype.showTrip = function(){
  trip = `<h2>${this.location}</h2>`
  return trip
}

// render new trip via json
$(function (){
  $(document).on('submit', '#new_trip', function(e){
    e.preventDefault();
    const formPostUrl = $(this).attr("action")
    const formData = $(this).serialize();
    $.ajax({
      url: formPostUrl,
      method: 'post',
      data: formData,
      success: function(data) {
        const newTrip = new Trip(data);
        const showNewTrip = newTrip.showTrip();
        $("div#tripResult").append(showNewTrip)
        $('#new_trip')[0].reset();
      },
      error: function(response) {
        $('div#reviewErrors').html("Sorry, there was an error. Please try again.")
      }
    });
  });
})


//show/hide buttons on trips create format
$(document).ready(function(){
    $("#gear-form-button").click(function(){
      $("#inner-gear").show();
    });
});
