//Part 1 (sum function)

var sum = function(x, y){
  "use strict";
  return x+y;
}

console.log(sum(8, 11));

//Part 2 (Runners)

var matt = {
  finishingTime1: 240, //in minutes
  finishingTime2: 210.4,
  finishingTime3: 235.1,
  finishingTime4: 208.9,
  finishingTime5: 197.5,
  finishingTime6: 227.4
};

var mark = {
  finishingTime1: 120, //in minutes
  finishingTime2: 110.4,
  finishingTime3: 135.1,
  finishingTime4: 108.9,
  finishingTime5: 97.5
};

var getAverageTime = function(person) {
  "use strict";
  var totaltime = 0;
  for (var finishingTime in person) {
    totaltime += person[finishingTime];
}
    var totalraces = Object.keys(person).length;
    var avgTime = totaltime / totalraces;
    return avgTime;
};

console.log(getAverageTime(matt));
console.log(getAverageTime(mark));


//Part 3 (Bank Accounts)

var MattsBankAccount = {
  checking: 0,
  savings: 0,
  retirement: 0
};

var RobertosBankAccount = {
  checking: 0,
  savings: 0,
  retirement: 0
};

function addToBank(account, savings, retirement, checking) {
  "use strict";
  account.savings = account.savings + savings;
  account.retirement = account.retirement + retirement;
  account.checking = account.checking + checking;
}

function getSumOfAccounts(account) {
  "use strict";
  var acctSum = account.savings + account.retirement + account.checking;
  return acctSum;
}

addToBank(MattsBankAccount, 100, 10, 1);
addToBank(RobertosBankAccount, 200, 50, 19);

var sumOfMatts = getSumOfAccounts(MattsBankAccount);
var sumOfRobertos = getSumOfAccounts(RobertosBankAccount);

console.log(sumOfMatts - sumOfRobertos);
