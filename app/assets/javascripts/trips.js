$(document).on('turbolinks:load', function() {

  class Trip{
    //create trip object model using constructor
  constructor(trip){
  this.date = trip.date
  this.location = trip.location
  this.duration = trip.duration
  this.backpack_size = trip.backpack_size
  this.camping_type = trip.camping_type
  this.weather = trip.weather
  this.completed = trip.completed
  }
