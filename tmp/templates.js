angular.module('templates-main', ['category/categoryHome.html', 'checkoutPopup/checkoutPopup.html', 'header/header.html', 'index.html', 'productDetails/productDetails.html', 'productThumbNail/productThumbNail.html']);

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
    "              <product-thumb-nail product=\"product\" class=\"one-third column\" ng-repeat=\"product in availiableProducts\"  add-to-cart-click=\"addProductToCart(productid)\"></product-thumb-nail>\n" +
    "\n" +
    "  \n" +
    "\n" +
    "\n" +
    "\n" +
    "  </div>\n" +
    "  <br/>\n" +
    "</div>");
}]);

angular.module("checkoutPopup/checkoutPopup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("checkoutPopup/checkoutPopup.html",
    "<div ng-repeat=\"product in products\" class=\"cart-item\">\n" +
    "\n" +
    "  <img src=\"images/{{product.image}}\">\n" +
    "  <a class=\"remove-icon noselect\" href=\"#\" title=\"Remove\"\n" +
    "          ng-click=\"removeProductFromCart(product.id)\">X</a>\n" +
    "  <p class=\"strong\">\n" +
    "    {{product.title}}</p>\n" +
    "  <p class=\"checkoutProductCount\">\n" +
    "    x {{product.count}}</p>\n" +
    "  <p class=\"checkoutProductBrand\">\n" +
    "    {{product.brand}}</p>\n" +
    "  <p class=\"checkoutProductPrice\">\n" +
    "    {{product.price | currency:USD}}</p>\n" +
    "\n" +
    "  \n" +
    "</div>\n" +
    "<div ng-if=\"products.length == 0\" class=\"cart-item\">\n" +
    "  <br>\n" +
    "  <p>The cart is empty.</p>\n" +
    "  <br>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"actions\">\n" +
    "  <div>\n" +
    "    <p class=\"pull-right\">{{getTotal() | currency:USD}}</p>\n" +
    "    <p>Total</p>\n" +
    "   \n" +
    "  </div>\n" +
    "  <a class=\"button\" routerLink=\"/cart\" (click)=\"close($event)\">View Cart</a>\n" +
    "  <button class=\"button-primary u-pull-right\"\n" +
    "    [disabled]=\"products.length === 0\"\n" +
    "    (click)=\"checkout()\">Checkout</button>\n" +
    "  \n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
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
    "    <!--<a class=\"nav-link hidden-phone\" toggle-class=\"active\">\n" +
    "      MY CART ({{getTotalCountOfProductsAddedToCart()}})\n" +
    "      <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n" +
    "    </a>-->\n" +
    "\n" +
    "    <a class=\"nav-link hidden-phone\" ng-click=\"isCheckoutPopupOpen = !isCheckoutPopupOpen\">\n" +
    "      MY CART ({{getTotalCountOfProductsAddedToCart()}})\n" +
    "      <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n" +
    "    </a>\n" +
    "\n" +
    "    <checkout-popup  products=\"selectedProducts\" ng-class=\"{ 'active': isCheckoutPopupOpen }\" popup-open=\"isCheckoutPopupOpen\">\n" +
    "\n" +
    "   </checkout-popup>\n" +
    "\n" +
    "\n" +
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
    "  <link href=\"https://fonts.googleapis.com/css?family=Merriweather\" rel=\"stylesheet\" type='text/css'>\n" +
    "  <script type=\"text/javascript\" src=\"bower_components/angular/angular.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"bower_components/angular-sanitize/angular-sanitize.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"bower_components/angular-ui-router/release/angular-ui-router.min.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"app.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"productDetails/productDetailsCtrl.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"services/productService.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"header/headerComponent.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"productThumbNail/productThumbNailComponent.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"checkoutPopup/checkoutPopupComponent.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"checkoutPopup/toggleClassComponent.js\"></script>\n" +
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

angular.module("productDetails/productDetails.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("productDetails/productDetails.html",
    "<div class=\"container\">\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "      <div class=\"breadcrumbs\">\n" +
    "        <a class=\"nav-link\" href=\"/\">HOME</a>\n" +
    "        <span class=\"nav-link\"> / </span>\n" +
    "        <a class=\"nav-link\" href=\"#\">PLATES</a>\n" +
    "        <span class=\"nav-link\"> / </span>\n" +
    "        <span class=\"nav-link currentNode\">{{selectedDetailedProduct.title | uppercase}}</span>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "\n" +
    "    <!-- Image container -->\n" +
    "    <div class=\"seven columns\">\n" +
    "      <img class=\"u-max-full-width\" src=\"images/{{selectedDetailedProduct.image}}\" alt=\"{{selectedDetailedProduct.title}}\">\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Product details -->\n" +
    "    <div class=\"five columns product-details\">\n" +
    "      <p class=\"brand\"> {{selectedDetailedProduct.brand}} </p>\n" +
    "      <p class=\"title\"> {{selectedDetailedProduct.title}} </p>\n" +
    "      <p class=\"brand\"> {{selectedDetailedProduct.price | currency}} </p>\n" +
    "      <p class=\"brand\"> {{selectedDetailedProduct.description}} </p>\n" +
    "      <hr>\n" +
    "      <div class=\"actions\">\n" +
    "        <div class=\"incrdcr\">\n" +
    "        <div class=\"number noselect\"> {{qtyValue}} </div>\n" +
    "          <div  class=\"actions\">\n" +
    "            <div class=\"noselect\" ng-click=\"increment()\" ng-init=\"qtyValue=1\">+</div>\n" +
    "            <div class=\"noselect\" ng-click=\"decrement()\" >-</div>\n" +
    "        </div>\n" +
    "       </div> \n" +
    "        <button class=\"button-primary\" ng-click=\"addProductToCart(selectedDetailedProduct.id,qtyValue)\">Add To Cart</button>\n" +
    "      </div>\n" +
    "      \n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("productThumbNail/productThumbNail.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("productThumbNail/productThumbNail.html",
    "<div class=\"image-container\">\n" +
    "  <img class=\"productBox\" src=\"images/{{product.image}}\" alt=\"{{product.title}}\">\n" +
    "  <div class=\"overlay\">\n" +
    "    <div><a class=\"button button-primary\" ui-sref=\"product({ id: product.id })\">View Details</a></div>\n" +
    "    <div><button class=\"button-primary\" ng-click=\"addToCart(product.id)\">Add To Cart</button></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<br/>\n" +
    "<p class=\"brand\" title=\"{{product.brand}}\">{{product.brand}}</p>\n" +
    "<p class=\"title\" title=\"{{product.title}}\">{{product.title}}</p>\n" +
    "<p class=\"brand\">{{product.price | currency}}</p>\n" +
    "<br/>\n" +
    "");
}]);
