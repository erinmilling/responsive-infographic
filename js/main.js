var $seed = $('.seed');
var $seedling = $('.seedling');
var $sprout = $('.sprout');
var $plant = $('.plant');
var $bigplant = $('.bigplant');
var $one = $('.one');
var $two = $('.two');
var $three = $('.three');
var $four = $('.four');
var $body = $('.background');
var $star;
var backWidth = $body.outerWidth();
var backHeight = $body.outerHeight();

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

$two.waypoint(function () {
  $two.addClass('js-slide');
}, {offset: '50%' });

$three.waypoint(function () {
  $three.addClass('js-rotate');
}, {offset: '50%' });

$four.waypoint(function () {
  $four.addClass('js-appear');
}, {offset: '50%' });

for (i = 0; i < 75; i++) {
  $star = $('<background>');
  $star.addClass('star');
  $star.css({
    top: Math.random() * backHeight,
    left: Math.random() * backWidth,
    transform: 'rotate(' + Math.random() * 360 + 'deg) scale(' + Math.random() + ')',
    opacity: Math.random()
  });
  $body.append($star);
}
