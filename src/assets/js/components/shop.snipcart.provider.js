
export class ShopSnipcartProvider {


  constructor($window, $rootScope) {    

    this.$window = $window;
	  this.$rootScope = $rootScope;
	  this.apiKey = "NWNjOWZhYjctYmE1ZS00MDM3LThkNjUtZmE5M2NiMTU1NzAwNjM2MjYzNTE1MzM5ODg1ODkw";//apiKey;
	  console.log("ShopSnipcartProvider.constcurct()");
   //  this.$get = ['$window', '$rootScope', function ($window, $rootScope) {
	  //   return new this.Service($window, $rootScope, this.apiKey);
	  // }];
	  // this.$get = () => new this.Service();
  }

  // this.apiKey = null;
  // this.$get = ['$window', '$rootScope', function ($window, $rootScope) {
  //   return new Service($window, $rootScope, this.apiKey);
  // }];

  // Service() {

  //   var service = {};
  //   console.log("ShopSnipcartProvider.Service()");
  //   load();

  //   return service;

  //   function load() {
  //     var script = this.$window.document.createElement('script');
  //     script.src = 'https://cdn.snipcart.com/scripts/2.0/snipcart.js';
  //     script.id = 'snipcart';

  //     var dataApiKey = this.$window.document.createAttribute('data-api-key');
  //     dataApiKey.value = this.apiKey;
  //     script.attributes.setNamedItem(dataApiKey);

  //     script.addEventListener('load', function () {
  //       service.Snipcart = this.$window.Snipcart;
  //       service.api = this.$window.Snipcart.api;
  //       service.subscribe = this.$window.Snipcart.subscribe;
  //       this.$rootScope.$emit('$snipcartLoad', service);
  //     });

  //     this.$window.document.getElementsByTagName('head')[0].appendChild(script);
  //   }

  // }

}

ShopSnipcartProvider.$inject = ['$window', '$rootScope'];