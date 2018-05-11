


$(function () {
  $(".all-trips").on("click", function(e) {
    e.preventDefault()

    $.get(this.href + ".json", function(data) {
      var $ol = $("div.trips-container ol")
      $ol.html("")
      let tripHtml = `
    <a href="/trips/${ this.id }"  >
      <h3>${ this.location }</h3>
    </a>
    `
      data.forEach(function(trip) {
          $ol.append(tripHtml)

      });
    });
  });
});





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




$(function () {
  $(".backpack-details").on("click", function(e) {
    e.preventDefault()

    $.get(this.href + ".json", function(data) {
      var $ol = $("div.backpack-container ol")
      $ol.html("")

      data.forEach(function(trip) {
          $ol.append("<li>" + trip.location + "</li>")

      });
    });
  });
});
