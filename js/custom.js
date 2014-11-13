
$(document).ready(function(){  
		// Add method to the Jquery validator 
		jQuery.validator.addMethod("lettersonly", function(value, element) 
		{
			return this.optional(element) || /^[a-z," "]+$/i.test(value);
		}, "Letters and spaces only please");      


 		// This is begin app form validators
		$('form.action_form').validate({
	        rules: {  
	          first_name: {
	            minlength: 2,
	            required: true,
	            lettersonly: true
	          },
	          last_name: { 
	            minlength: 2,
	            lettersonly: true,
	            required: true 
	          }, 
	          email: {
	            minlength: 2,
	            required: true,
	            email: true
	          } 
	        },
	        errorPlacement: function (error, element) {
			   error.appendTo(element.parents(".form-group"));
			},
	        highlight: function(label) {
	            // label.html('<i class="fa fa-warning"></i>');
	            $(label).closest('.form-group').addClass('has-error');
	        },
	        success: function(label) {
	            label
	                .html('<i class="fa fa-check-circle"></i> Valid!').addClass('valid')
	                .closest('.form-group').addClass('has-success');
	        }
	    });		
 
});