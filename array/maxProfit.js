let prices = [7, 1, 5, 3, 6, 4];
let BuyPrice = Infinity, Profit = 0;

prices.forEach(item => {

    if (item < BuyPrice) {
        BuyPrice = item;
    } else {

        Profit = Math.max(Profit, item - BuyPrice);
    }

}) 


if (Profit > 0) {
    console.log(`The maximum profit is: ${Profit}`);
    
}else{
    console.log("the profit is 0")
}