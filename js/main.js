var $seed = $('.seed');
var $seedling = $('.seedling');
var $sprout = $('.sprout');
var $plant = $('.plant');
var $bigplant = $('.bigplant');
var $one = $('.one');
var $two = $('.two');
var $three = $('.three');
var $four = $('.four');

$seed.waypoint(function() {
  $seed.addClass('js-seed-animate');
}, {offset: '50%' });

$seedling.waypoint(function() {
  $seedling.addClass('js-seedling-animate');
}, {offset: '50%' });

$sprout.waypoint(function() {
  $sprout.addClass('js-sprout-animate');
}, {offset: '50%' });

$plant.waypoint(function() {
  $plant.addClass('js-plant-animate');
}, {offset: '50%' });

$bigplant.waypoint(function() {
  $bigplant.addClass('js-bigplant-animate');
}, {offset: '50%' });

$one.waypoint(function () {
  $one.addClass('js-bounce');
}, {offset: '50%' });
