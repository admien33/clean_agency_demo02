
require("expose-loader?jQuery!jquery"); //needed expose global var jQuery, with snipcart api


var data_item_

(function() {
	"use strict";

	$(".style-picker").on("click", "> div", function (e) {
		var $el = $(e.currentTarget),
			id = $el.data("itemId"),
			$parent = $el.closest(".shop-styles");

		$parent.children(".style").hide();
		$parent.children(".style[data-item-id=" + id + "]").show();

		//update snipcart
	});

	// load snipcart
	function load() {
      var script = window.document.createElement('script');
      script.src = 'https://cdn.snipcart.com/scripts/2.0/snipcart.js';
      script.id = 'snipcart';

      var dataApiKey = window.document.createAttribute('data-api-key');
      dataApiKey.value = SNIPCART_APIKEY;
      script.attributes.setNamedItem(dataApiKey);

      script.addEventListener('load', function () {        
        console.log('load snipcart');
      });

      window.document.getElementsByTagName('head')[0].appendChild(script);
    }

    load();

   //  $("button.snipcart-add-item").on("click", function() {
			// var id_modal = "#shopModal"+$(this).attr('data-index-modal');
			// console.log('id_modal :'+id_modal);
	  //   $(id_modal).modal('hide'); 
   //  });


})();
