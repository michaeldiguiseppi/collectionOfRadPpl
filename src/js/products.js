// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

  var $red = $('.red');
  var $gray = $('.gray');
  var $blue = $('.blue');

  var $g19 = $('.g19');
  var $rad = $('.rad');

  var $getBlue = $('.getBlue');
  var $getRed = $('.getRed');
  var $getGray = $('.getGray');

  var $getRad = $('.getRad');
  var $getG19 = $('.getG19');



  //write a get all
  //add a return all button to the dom
  // event.stopPropagation();
  $('.waitForIt').hide();

  $($getBlue).on('click', function () {
    event.stopPropagation();
    $('.waitForIt').show();
    $($blue).show();
    $($red).hide();
    $($gray).hide();

  });

  $($getGray).on('click', function () {
    event.stopPropagation();
    $('.waitForIt').show();
    $($gray).show();
    $($red).hide();
    $($blue).hide();
  });

  $($getRed).on('click', function () {
    event.stopPropagation();
    $('.waitForIt').show();
    $($red).show();
    $($blue).hide();
    $($gray).hide();
  });

  $($getRad).on('click', function () {
    event.stopPropagation();
    $('.waitForIt').show();
    $($rad).show();
    $($g19).hide();
  });

  $($getG19).on('click', function () {
    event.stopPropagation();
    $('.waitForIt').show();
    $($g19).show();
    $($rad).hide();
  });

  $('.waitForIt').on('click', function () {
    event.stopPropagation();
    $('.waitForIt').hide();
    $($rad).show();
    $($g19).show();
    $($blue).show();
    $($gray).show();
    $($red).show();
  });

});


