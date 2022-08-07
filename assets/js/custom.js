$(function () {
    'use strict';

	/*------- Preloader--------*/
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
   /*--------------Form password check--------------*/
    $(document).on('click', '.password-indicator', function () {
        var PASSWORD_FIELD = $(this).closest('.password-wrapper').find('input');
        $(this).toggleClass('fa-eye-slash');
        var attrType = PASSWORD_FIELD.attr('type');
        if(attrType == 'password') {
            PASSWORD_FIELD.attr('type', 'text');
        } else {
            PASSWORD_FIELD.attr('type', 'password');
        }
    })
})(jQuery);
