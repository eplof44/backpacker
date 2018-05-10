console.log('trips js loaded')

// $(() => {
//   bindClickHandlers()
// })
//
// const bindClickHandlers = () => {
//   $('.all_trips').on('click', (e) => {
//     e.preventDefault()
//     fetch(`/trips.json`)
//       .then(res => res.json())
//       .then(trips => {
//       $('#app-container').html('hello')
//   })
// })
// }



$(function () {
  $(".js-next").on("click", function(e) {
    e.preventDefault()
    var nextId = parseInt($(".js-next").attr("data-id")) + 1;
    $.getJSON("/trips/" + nextId + ".json", function(data) {
      console.log(data)

      let id = data["id"]
      $(".tripLocation").text(data["location"]);
      $(".tripDate").text(data["date"]);
      $(".tripDuration").text(data["duration"]);
      $(".tripBackpack").text(data["backpack_size"]);
      $(".tripType").text(data["camping_type"]);
      $(".tripWeather").text(data["weather"]);
      $(".tripGear").text(data["items"]);

      // re-set the id to current on the link
      $(".js-next").attr("data-id", data["id"]);
    });
  });
})
