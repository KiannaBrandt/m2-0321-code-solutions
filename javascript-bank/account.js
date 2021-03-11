/* exported Account */
function Account (number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
};

Account.prototype.deposit = function (amount) {
  var transaction = new Transaction('deposit', amount);
  if (amount > 0) {
    this.transactions.push(transaction)
  }
  return amount > 0;
};

Account.prototype.withdraw = function(amount) {
  var transaction = new Transaction('withdraw', amount);
  if (amount > 0) {
    this.transactions.push(transaction)
  }
  return amount > 0;
};

Account.prototype.getBalance = function () {
  var funds = 0
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      funds += this.transactions[i].amount;
    }
    if (this.transactions[i].type === 'withdraw') {
      funds -= this.transactions[i].amount;
    };
  };
  return funds;
}
