var $seed = $('.seed');
var $seedling = $('.seedling');
var $sprout = $('.sprout');
var $plant = $('.plant');
var $bigplant = $('.bigplant');

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
