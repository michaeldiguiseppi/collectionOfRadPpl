$('document').ready(function() {

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
});

