// add scripts

$(document).on('ready', function() {

        // On add to cart click, append a counter next to the shopping cart icon in the header

        var cartCounter = 0;

        $('.cartAdd').on('click', function(event) {
            event.preventDefault();
            if (cartCounter === 0) {
              cartCounter += 1;
              $('.glyphicon-shopping-cart').before('<span class="circleCost">(' + cartCounter + ') &nbsp;</span>');
            } else {
              cartCounter += 1;
              $('.circleCost').text('(' + cartCounter + ') ');
            }
        });
});


