
import 'angular';
import 'angular-ui-router';
import 'angular-sanitize';

import './components/util/snipcart.js'

import {articles} from "./components/shop.articles";
import {detail} from "./components/shop.detail";
import {ShopService} from "./components/shop.service";
// import {ShopSnipcartProvider} from "./components/shop.snipcart.provider";

require("expose-loader?jQuery!jquery");

var jekyllApp = angular.module('JekyllApp', ['ui.router','ngSanitize','snipcart.service']);


jekyllApp.config(['$compileProvider', '$locationProvider', '$stateProvider', '$urlServiceProvider', '$provide', '$snipcartProvider',
	function ($compileProvider, $locationProvider, $stateProvider, $urlServiceProvider, $provide, $snipcartProvider) {

  // optim production
  $compileProvider.debugInfoEnabled(false);
 
	//$location service, keep history browser
	//see > 1.6.0 : default hashbang '!', https://docs.angularjs.org/guide/migration#-location-
  // default hashbang mode used, V1;  jekyll need permalink /shop/index.html; but in html5 mode, index.html is filtering, todo eval with rewrite url 
	$locationProvider.html5Mode(false).hashPrefix('!');

	$provide.service('ShopService', ShopService);

  $snipcartProvider.apiKey = 'NWNjOWZhYjctYmE1ZS00MDM3LThkNjUtZmE5M2NiMTU1NzAwNjM2MjYzNTE1MzM5ODg1ODkw';


  // $provide.provider('ShopSnipcartProvider', ShopSnipcartProvider);
	

	// An array of state definitions
  var states = [	
    { 
      name: 'articles', url: '/articles', component: 'articles',
      resolve: {
        articles: ['ShopService',function(ShopService) {
          return ShopService.getAllArticles();
        }],
        config: ['ShopService',function(ShopService) {
         return ShopService.getConfig();
        }]
      }
    },
    { 
      name: 'detail', url: '/{_articleUrl:any}', component: 'detail',
      resolve: {
        article: ['ShopService','$transition$',function(ShopService, $transition$) {
          return ShopService.getArticle($transition$.params()._articleUrl);
        }],
        articlePrevious: ['ShopService','$transition$',function(ShopService, $transition$) {
          return ShopService.getPreviousArticle($transition$.params()._articleUrl);
        }],
        articleNext: ['ShopService','$transition$',function(ShopService, $transition$) {
          return ShopService.getNextArticle($transition$.params()._articleUrl);
        }],
        content: ['ShopService', '$transition$', function(ShopService, $transition$) {
          return ShopService.getArticleContent($transition$.params()._articleUrl);
        }]
      }
    }
  ];

	// Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });

  // For any unmatched url, send to 
  $urlServiceProvider.rules.otherwise("/articles");
 
}]);



// +++++++++++++++++++++++++++++++++++++++++
// Components
jekyllApp.component('articles', articles )
.component('detail', detail );




jekyllApp.run(['$transitions', '$document',
	function($transitions, $document) {		

		$transitions.onSuccess({}, function(transition) {
	    $document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0;
	  })
	  // or <ui-view autoscroll="true"></ui-view>
}]);

// https://github.com/angular-ui/ui-router/issues/816
// to evaluate, with html5 $locationProvider.html5Mode(true) ! pb with permalink jekyll
// 
// app.run(function($anchorScroll, $window) {
//   // hack to scroll to top when navigating to new URLS but not back/forward
//   var wrap = function(method) {
//     var orig = $window.window.history[method];
//     $window.window.history[method] = function() {
//       var retval = orig.apply(this, Array.prototype.slice.call(arguments));
//       $anchorScroll();
//       return retval;
//     };
//   };
//   wrap('pushState');
//   wrap('replaceState');
// })


