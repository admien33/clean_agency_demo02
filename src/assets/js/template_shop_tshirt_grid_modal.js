

(function() {
	"use strict";

  const common_id_modal = "#shopModal";

  $(".shop-modal button.snipcart-add-item").on("click", function() {
		var id_modal = common_id_modal+$(this).attr('data-index-modal');
    $(id_modal).modal('hide'); 
  });

  $(".shop-link").on("click", function()
  {
    var current_data_item_id = $(this).parent(".style").attr('data-item-id');
    var id_modal = $(this).attr('href');
    updateModalSnipcart(id_modal,current_data_item_id);   
  });

  $(".shop-modal .style-picker").on("click", "> div", function (e) {
    var $el = $(e.currentTarget);
    var current_data_item_id = $el.attr("data-item-id");
    var $modal = $el.parents(".shop-modal");
    var id_modal = '#'+$modal.attr("id");    
    updateModalSnipcart(id_modal,current_data_item_id,true);  
  });

  function updateModalSnipcart(_id_modal,_current_data_item_id,updateList) {

    var elt_button_snipcart = _id_modal + " button.snipcart-add-item";
    
    var ref_elts_style = " .shop-styles .style";
    
    var elt_style = _id_modal + ref_elts_style;//default, update a modal article
    if (updateList === true) 
    {
      var current_index_modal = _id_modal.replace(common_id_modal,'');
      $(".shop_tshirt_grid .shop-item").each(function() {
        if ($(this).attr("data-index-modal") === current_index_modal) {
          elt_style = $(this).find(ref_elts_style);
        }
      });
    }    

    $(elt_style).each( function( index ) {        

      if ($(this).attr("data-item-id")===_current_data_item_id) 
      {
        $(this).show();
        //update data-item-image snipcart button
        var path_img = $(this).find("img").attr("src");
        var current_image = $(elt_button_snipcart).attr("data-item-image");
        var templ = current_image.substring(0,current_image.indexOf('/',1)+1);
        var new_image = path_img.substring(path_img.indexOf(templ),path_img.length);
        $(elt_button_snipcart).attr("data-item-image",new_image);
        //update data-item-custom2-value (== color name) snipcart button
        var listOptions = $(elt_button_snipcart).attr("data-item-custom2-options").split('|');
        var index_ref=parseInt(_current_data_item_id)-1;
        listOptions.forEach( function(value,index ) {
          if (index===index_ref) {
            $(elt_button_snipcart).attr("data-item-custom2-value",value);              
          }
        });
      }
      else {
        $(this).hide();
      }      
    });    
  }// ./ updateModalSnipcart()


})();
