

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
      $('.tripItems').text(data["trip.items"]);

      // re-set the id to current on the link
      $(".js-next").attr("data-id", data["id"]);
    });
  });
})

// function getItems() {
//   $('.tripItems').append("hey")
// };
//can't get items to load
// function getItems(item){
//   var string = '';
//   $.getJSON("trips.html", function(data){
//       $.each(data, function(k, v) {
//         $('.tripItems').append(string);
// });
//   });
