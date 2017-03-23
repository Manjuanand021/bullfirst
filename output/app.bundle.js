webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//Entry point for all controllers in application
var angular = __webpack_require__(0);
angular.module('bullsfirst').controller('AccountsController', __webpack_require__(3))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

angular.module('bullsfirst', []);

// require('./filters');
// require('./directives');
// require('./services');
__webpack_require__(1);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



//Fucntion costructor - template/contract for account
function Account(name, marketValue, cash, legend) {
    this.name = name;
    this.marketValue = marketValue;
    this.cash = cash;
    this.legend = legend;
    Account.sumOfMarketValue += marketValue;
    Account.sumOfCash += this.cash;
    Account.instanceCount++;
}
Account.prototype.sumOfMarketValue = 0;
Account.prototype.sumOfCash = 0;
Account.instanceCount = 0;

AccountsController.$inject = ['$scope'];
function AccountsController($scope) {
    $scope.rows = [
        new Account('Brokerage Account 3', 1999990, 1995826, 'orange'),
        new Account('Account 3', 1949990, 1695856, 'darkorange'),
        new Account('Brokerage Account 1', 1349990, 1595866, 'red'),
        new Account('Brokerage Account 4', 155990, 160826, 'blue'),
        new Account('Brokerage Account 2', 74560, 19956, 'gray'),
        new Account('Account 4', 55006, 55006, '55006', 'red'),
        new Account('Account 13', 37340, 0, 'green'),
        new Account('Joint Account 1', 28308, 4167, 'darkblue'),
        new Account('Joint Account 1', 10000, 10000, 'teal')
    ];


    $scope.totals = new Account('', 0, 0, 'none');

    console.log(Account.sumOfCash);


    // reduce()- Reduce the values of an array to a single value (going left-to-right)
    $scope.totals.marketValue = $scope.rows.reduce(function (a, b) {
        return a.marketValue + b.camarketValuesh;
    });
    $scope.totals.cash = $scope.rows.reduce(function (a, b) {
        return a.cash + b.cash;
    });

    $scope.addAccount = function () {
        $scope.rows.push(new Account('New Account', Math.random() * 100000, Math.random() * 400000, 'cyan'));
    }
};

module.exports = AccountsController;

/***/ })
],[2]);