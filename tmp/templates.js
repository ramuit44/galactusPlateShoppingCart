angular.module('templates-main', ['app_components/category/categoryHome.html', 'app_components/checkoutPopup/checkoutPopup.html', 'app_components/header/header.html', 'app_components/productDetails/productDetails.html', 'app_components/productThumbNail/productThumbNail.html', 'app_components/shoppingCartSummary/summary.html']);

angular.module("app_components/category/categoryHome.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app_components/category/categoryHome.html",
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

angular.module("app_components/checkoutPopup/checkoutPopup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app_components/checkoutPopup/checkoutPopup.html",
    "<div ng-repeat=\"product in products\" class=\"cart-item\">\n" +
    "\n" +
    "  <img src=\"images/{{product.image}}\">\n" +
    "  <a class=\"remove-icon noselect removeProductCheckoutPoup\" title=\"Remove\"\n" +
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
    "<div class=\"actionsProductCheckoutPoup\">\n" +
    "  <div>\n" +
    "    <p class=\"pull-right\">{{getTotal() | currency:USD}}</p>\n" +
    "    <p>Total</p>\n" +
    "   \n" +
    "  </div>\n" +
    "  <a class=\"button\" ui-sref=\"summary\">View Cart</a>\n" +
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

angular.module("app_components/header/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app_components/header/header.html",
    "<nav class=\"navbar\">\n" +
    "\n" +
    "  <div class=\"logo-container\">\n" +
    "    <a ui-sref=\"category\"><img src=\"images/logo.png\" alt=\"Galctus Shopping Cart\"></a>\n" +
    "  </div>\n" +
    "  <div class=\"menu-container\">\n" +
    "\n" +
    "    <!--<a class=\"nav-link hidden-phone\" toggle-class=\"active\">\n" +
    "      MY CART ({{getTotalCountOfProductsAddedToCart()}})\n" +
    "      <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n" +
    "    </a>-->\n" +
    "\n" +
    "    <a class=\"nav-link hidden-phone checkoutPopupOpener\" ng-click=\"isCheckoutPopupOpen = !isCheckoutPopupOpen\">\n" +
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
    "      <a class=\"nav-link\" ui-sref=\"category\">HOME</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a class=\"nav-link\" ui-sref=\"category\">SHOP <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i></a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a class=\"nav-link\" ui-sref=\"category\">JOURNAL</a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a class=\"nav-link\" ui-sref=\"category\">MORE <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i></a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    " \n" +
    "</nav>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("app_components/productDetails/productDetails.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app_components/productDetails/productDetails.html",
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

angular.module("app_components/productThumbNail/productThumbNail.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app_components/productThumbNail/productThumbNail.html",
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

angular.module("app_components/shoppingCartSummary/summary.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app_components/shoppingCartSummary/summary.html",
    "<div class=\"summaryPage\">\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"row subtitle\">\n" +
    "        <h1>Shopping Cart</h1>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"container content-table\">\n" +
    "      <div class=\"row\">\n" +
    "        <table >\n" +
    "          <thead ng-if=\"selectedProducts.length > 0\">\n" +
    "            <tr>\n" +
    "              <th>Product</th>\n" +
    "              <th>Quantity</th>\n" +
    "              <th>Total</th>\n" +
    "              <th>Action</th>\n" +
    "            </tr>\n" +
    "          </thead>\n" +
    "          <tbody>\n" +
    "\n" +
    "            <!-- Products -->\n" +
    "            <tr ng-repeat=\"product in selectedProducts\" class=\"productRow\">\n" +
    "\n" +
    "              <!-- Product details -->\n" +
    "              <td class=\"product-details\">\n" +
    "                <img src=\"images/{{product.image}}\">\n" +
    "                <p class=\"brand\" title=\"{{product.brand}}\">\n" +
    "                  {{product.brand}}</p>\n" +
    "                <p class=\"title\" title=\"{{product.title}}\">\n" +
    "                  {{product.title}}</p>\n" +
    "              </td>\n" +
    "\n" +
    "              <!-- Quantity -->\n" +
    "              <td>\n" +
    "                 \n" +
    "                      <div class=\"incrdcr\">\n" +
    "                        <div class=\"number noselect\"> {{product.count}} </div>\n" +
    "                          <div  class=\"actions\">\n" +
    "                            <div class=\"noselect\" ng-click=\"incrementProductQty(product)\">+</div>\n" +
    "                            <div class=\"noselect\" ng-click=\"decrementProductQty(product)\" >-</div>\n" +
    "                        </div>\n" +
    "                     </div> \n" +
    "                 \n" +
    "\n" +
    "              </td>\n" +
    "\n" +
    "              <!-- Price -->\n" +
    "              <td class=\"price\">{{product.price*product.count | currency:USD}}</td>\n" +
    "\n" +
    "              <!-- Actions -->\n" +
    "              <td>\n" +
    "                <a class=\"prod-remove-icon noselect removeProductCheckoutPoup\" title=\"Remove\"\n" +
    "                    ng-click=\"removeProdFromCart(product.id)\">X</a>\n" +
    "              </td>\n" +
    "\n" +
    "            </tr>\n" +
    "\n" +
    "            <tr ng-if = \"selectedProducts.length === 0\">\n" +
    "              <td colspan=\"4\" class=\"cart-empty-text\">\n" +
    "                <h5>Empty Cart</h5>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "\n" +
    "\n" +
    "            <!-- Summary -->\n" +
    "            <tr class=\"summary\">\n" +
    "              <td colspan=\"2\">\n" +
    "                <p class=\"overviewContent\">CART OVERVIEW</p>\n" +
    "                <p class=\"overviewContent\">SUBTOTAL</p>\n" +
    "                <p class=\"overviewContent\">TOTAL</p>\n" +
    "              </td>\n" +
    "              <td colspan=\"2\">\n" +
    "                <p class=\"overviewMetrics\">&nbsp;</p>\n" +
    "                <p class=\"overviewMetrics\">{{getTotal() | currency:USD}}</p>\n" +
    "                <p class=\"total\">{{getTotal() | currency:USD}} CAD</p>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "\n" +
    "\n" +
    "            <!-- Footer Buttons -->\n" +
    "            <tr class=\"footer-actions\">\n" +
    "              <td colspan=\"2\">\n" +
    "                <a class=\"nav-link\" ui-sref=\"category\">Continue Shopping</a>\n" +
    "              </td>\n" +
    "              <td colspan=\"2\">\n" +
    "                <button class=\"button-primary\">Checkout ({{getTotal() | currency:USD}})</button>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
