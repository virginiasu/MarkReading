$(function(){
    $("#addLabelTrigger").click(function(){
        $("#form_marker").validate({
            rules: {
                newLabel: {
                    required: true,
                    maxlength: 16,
                    errorElement: "em.error"
                }
            }
        });
            
    });
});


