$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip({ 'placement': 'top' });
    
    $('#donation-form').validator(); 

    $('#donation-form').on('submit', function(e) {

        if(!e.isDefaultPrevented()) {

            var subName = `${$('[name="firstname"]').val()} ${$(':text[name="lastname"]').val()}`;
            var subNum = $('[name=number]').val();

            $.ajax({
                type: "POST", 
                url: "donation.php", 
                // data: $(this).serialize(), 
                data: { subName: subName, subNum: subNum }, 
                success: function(data) {
                    var messageAlert = 'alert-' + data.type; 
                    var messageText = data.message;

                    var alertBox = `<div class="alert ${messageAlert} alert-dismissiable">
                                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">
                                        &times;
                                        </button>${messageText}</div>`;

                    if (messageAlert && messageText) {
                    // if (messageText) {
                        // inject the alert to .messages div in our form
                        // $('#donation-form').find('#reply').html(messageText);
                        $('#reply').html(alertBox);
                        // empty the form
                        $('#donation-form')[0].reset();
                    }
                }
            });
            return false; 
        }
    })
})