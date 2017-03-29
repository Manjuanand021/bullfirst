'use strict';

//ES6 class - template/contract for account
class Account {
    constructor(name, marketValue, cash, legend) {
        this.name = name;
        this.marketValue = marketValue;
        this.cash = cash;
        this.legend = legend;
    }
}

export default class AccountsController {
    constructor($scope) {
        this.$scope = $scope;        
        this.$scope.rows = [
            new Account('Brokerage Account 3', 1999990, 1995826, 'orange'),
            new Account('Account 3', 1949990, 1695856, 'darkorange'),
            new Account('Brokerage Account 1', 1349990, 1595866, 'red'),
            new Account('Brokerage Account 4', 155990, 160826, 'blue'),
            new Account('Brokerage Account 2', 74560, 19956, 'gray'),
            new Account('Account 4', 55006, 55006, 'salmon'),
            new Account('Account 13', 37340, 0, 'green'),
            new Account('Joint Account 1', 28308, 4167, 'darkblue'),
            new Account('Joint Account 1', 10000, 10000, 'teal')
        ];
        this.$scope.totals = new Account('', 0, 0, 'none');

        this.$scope.totals = new Account('', 0, 0, 'none');

        function total(t, n) {
            return {
                sum: t.marketValue + n.marketValue
            }
        }
        // reduce()- Reduce the values of an array to a single value (going left-to-right)
        this.$scope.totals.marketValue = this.$scope.rows.reduce((a, b) => (
            a + b.marketValue
        ), 0);

        this.$scope.totals.cash = this.$scope.rows.reduce((a, b) => (
            a + b.cash
        ), 0);

        this.$scope.addAccount = () => {
            this.$scope.rows.push(new Account('New Account', Math.random() * 100000, Math.random() * 400000, 'cyan'));
        }

    }
}
AccountsController.$inject = ['$scope'];