
export const articles = {

	bindings: { articles: '<'},

	// script ng-template /src/_includes/templates/page_site/section/shop_tshirt_angular_content.html
	templateUrl: 'templateListShop.html',

	controller: ['$http', '$rootScope', '$snipcart', function ShopListController($http,$rootScope,$snipcart) {
    var self = this;
    self.orderProp = '-raw_date';

    $rootScope.$on('$snipcartLoad',function (event, data) {
    	console.log(data);
    	// $snipcart.Snipcart.api.modal.show();
    	var count = Snipcart.api.items.count();
    	console.log('count : '+ count);

   //  	Snipcart.api.items.add({
		 //    "id": "SMARTPHONE",
		 //    "name": "Smartphone",
		 //    "description": "",
		 //    "url": "/",
		 //    "price": "399.00"
			// }).then (function (item) { 
			// 	console.log(item); 
			// 	console.log('count : '+ Snipcart.api.items.count()); 
			// });

   		// 	document.addEventListener('snipcart.ready', function() {
			// 	var count = Snipcart.api.items.count();
			// });
    });

    // 
	
  }]
  
}