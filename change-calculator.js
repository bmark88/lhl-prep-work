let calculateChange = function(total, cash) {
  let change = cash - total;
  let twentyDollar, tenDollar, fiveDollar, twoDollar,oneDollar, quarter, dime, nickel, penny;
  let changeBreakDown = {};

  if (change >= 2000) {
    twentyDollar = Math.floor(change / 2000);
    change = change - (twentyDollar * 2000);
    changeBreakDown.twentyDollar = twentyDollar;
  }

  if (change >= 1000) {
    tenDollar = Math.floor(change / 1000);
    change = change - (tenDollar * 1000);
    changeBreakDown.tenDollar = tenDollar;
  }

  if (change >= 500) {
    fiveDollar = Math.floor(change / 500);
    change = change - (fiveDollar * 500);
    changeBreakDown.fiveDollar = fiveDollar;
  }

  if (change >= 200) {
    twoDollar = Math.floor(change / 200);
    change = change - (twoDollar * 200);
    changeBreakDown.twoDollar = twoDollar;
  }

  if (change >= 100) {
    oneDollar = Math.floor(change / 100);
    change = change - (oneDollar * 100);
    changeBreakDown.oneDollar = oneDollar;
  }

  if (change >= 25) {
    quarter = Math.floor(change / 25);
    change = change - (quarter * 25);
    changeBreakDown.quarter = quarter;
  }

  if (change >= 10) {
    dime = Math.floor(change / 10);
    change = change - (dime * 10);
    changeBreakDown.dime = dime;
  }

  if (change >= 5) {
    nickel = Math.floor(change / 5);
    change = change - (nickel * 5);
    changeBreakDown.nickel = nickel;
  }

  if (change >= 1) {
    penny = Math.floor(change / 1);
    change = change - (penny * 1);
    changeBreakDown.penny = penny;
  }
  
  return changeBreakDown;
};


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
