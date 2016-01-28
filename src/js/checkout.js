$('document').ready(function() {

    Stripe.setPublishableKey('pk_test_80nsUds20krPkbbciLwdk8FF');



    // Copy check from one form to another //

    $('#copyBilling').on('change', function() {
        var billing = $('#firstForm');
        var shipping = $('#secondForm');

        if ($(this).is(':checked')) {
            $(':input[name]', shipping).val(function(){
            return $(':input[name='+ this.name +']', billing).val();
            });
        } else {
            $(':input[name]', shipping).val('');
        }
    });


    // Credit card validation //





});

$('.submit').on('click', function() {

    var cardInfo = {
        number: $('.card-number').val(),
        cvc: $('.card-cvc').val(),
        exp_month: $('.card-expiry-month').val(),
        exp_year: $('.card-expiry-year').val()
    };

Stripe.card.createToken(cardInfo, stripeResponseHandler);

});


$('.card-number').on('blur', function() {
    var cardNum = $('.card-number');

    if (!Stripe.card.validateCardNumber(cardNum.val())) {
        cardNum.addClass('creditWarning');
    } else {
        cardNum.removeClass('creditWarning');
    }
});

$('.card-expiry').on('blur', function() {
    var exp_month = $('.card-expiry-month').val();
    var exp_year = $('.card-expiry-year').val();
    var expiry = $('.card-expiry');

    if (!Stripe.card.validateExpiry(exp_month, exp_year)) {
        expiry.addClass('creditWarning');
    } else {
        expiry.removeClass('creditWarning');
    };
});


$('.card-cvc').on('blur', function() {
    var cvcCode = $('.card-cvc');

    if (!Stripe.card.validateCVC(cvcCode.val())) {
        cvcCode.addClass('creditWarning');
    } else {
        cvcCode.removeClass('creditWarning');
    };
});



function stripeResponseHandler(status, response) {
    if (response.error) {
        $('.alert-danger').toggleClass('hidden');
    } else {
        $('.alert-danger').hide();
        $('.alert-success').toggleClass('hidden');
    }
}
