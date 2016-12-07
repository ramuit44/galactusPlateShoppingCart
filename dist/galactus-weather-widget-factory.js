var shoppingCartApp = angular.module("shoppingCartApp",[ "ui.router"]);


shoppingCartApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/category');
    $stateProvider
        .state('category', {url: '/category', templateUrl: 'category/categoryHome.html'});
       
}]);


shoppingCartApp.controller('shoppingCartAppCtrl', ['$scope','productService', function($scope,productService) {

 	$scope.availiableProducts = [];

 	productService.getProducts().then(
 			function(result){
 				$scope.availiableProducts = result;
 			}
 		);

 		
 		

}]);


;angular.module('templates-main', ['category/categoryHome.html', 'header/header.html', 'index.html', 'productThumbNail/productThumbNail.html']);

angular.module("category/categoryHome.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("category/categoryHome.html",
    "<div  class=\"header-container\">\n" +
    "\n" +
    "  <div class=\"textblock\">\n" +
    "    <div class=\"wrapper\">\n" +
    "      <h1><span>Plates</span></h1>\n" +
    "      <p>\n" +
    "        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div  class=\"product-list-container container\">\n" +
    "  <div class=\"row\">\n" +
    "\n" +
    "\n" +
    "    \n" +
    "              <product-thumb-nail product=\"product\" class=\"one-third column\" ng-repeat=\"product in availiableProducts\"></product-thumb-nail>\n" +
    "\n" +
    "  \n" +
    "\n" +
    "\n" +
    "\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("header/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("header/header.html",
    "<nav class=\"navbar\">\n" +
    "\n" +
    "  <div class=\"logo-container\">\n" +
    "    <a href=\"/\"><img src=\"images/logo.png\" alt=\"Galctus Shopping Cart\"></a>\n" +
    "  </div>\n" +
    "  <div class=\"menu-container\">\n" +
    "\n" +
    "    <a class=\"nav-link hidden-phone\" (click)=\"toggleCartPopup($event)\">\n" +
    "      My Cart ({{cartLength}})\n" +
    "      <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n" +
    "    </a>\n" +
    "\n" +
    "    <!--<a class=\"mobile-menu visible-phone\">\n" +
    "      <i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>-->\n" +
    "\n" +
    "    \n" +
    "  </div>\n" +
    "\n" +
    "  <ul class=\"main-menu hidden-phone\">\n" +
    "    <li>\n" +
    "      <a class=\"nav-link\" href=\"/\">HOME</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a class=\"nav-link\" href=\"/\">SHOP <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i></a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a class=\"nav-link\" href=\"/\">JOURNAL</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a class=\"nav-link\" href=\"/\">MORE <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i></a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    " \n" +
    "</nav>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("index.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <meta charset=\"utf-8\">\n" +
    "  <title>Storefront</title>\n" +
    "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
    "  <link rel=\"stylesheet\" type=\"text/css\" href=\"bower_components/font-awesome/css/font-awesome.min.css\"/>\n" +
    "  <link rel=\"stylesheet\" type=\"text/css\" href=\"../dist/app.css\"/>\n" +
    "  <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>\n" +
    "  <script type=\"text/javascript\" src=\"bower_components/angular/angular.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"bower_components/angular-sanitize/angular-sanitize.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"bower_components/angular-ui-router/release/angular-ui-router.min.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"app.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"services/productService.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"header/headerComponent.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"productThumbNail/productThumbNailComponent.js\"></script>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</head>\n" +
    "<body ng-app=\"shoppingCartApp\" ng-controller=\"shoppingCartAppCtrl\">\n" +
    "  <shopping-cart-header></shopping-cart-header>\n" +
    "  <div class=\"content\">\n" +
    "    <div ui-view></div>\n" +
    "  </div>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("productThumbNail/productThumbNail.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("productThumbNail/productThumbNail.html",
    "<div class=\"image-container\">\n" +
    "  <img class=\"productBox\" src=\"images/{{product.image}}\" alt=\"{{product.title}}\">\n" +
    "  <div class=\"overlay\">\n" +
    "    <div><a class=\"button button-primary\" routerLink=\"/product/{{product.id}}\">View Details</a></div>\n" +
    "    <div><button class=\"button-primary\" (click)=\"addToCart()\">Add To Cart</button></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<p class=\"brand\" title=\"{{product.brand}}\">{{product.brand}}</p>\n" +
    "<p class=\"title\" title=\"{{product.title}}\">{{product.title}}</p>\n" +
    "<h6 class=\"price\">{{product.price | currency:'USD':true}}</h6>\n" +
    "");
}]);
