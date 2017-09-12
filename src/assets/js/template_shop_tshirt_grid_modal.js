

(function() {
	"use strict";	

    $("shop-modal button.snipcart-add-item").on("click", function() {
			var id_modal = "#shopModal"+$(this).attr('data-index-modal');
			console.log('id_modal :'+id_modal);
	    $(id_modal).modal('hide'); 
    });

})();
