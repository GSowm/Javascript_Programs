let prices = [98, 198, 298, 398];

/*let new_prices = [];

for(const price of prices)
{
    new_prices.push(price+1);
}
new_prices.forEach((price)=>console.log(price));*/

/*let new_pdt_prices = prices.map((price)=>
{
    return price+1;
})
console.log(prices);
console.log(new_pdt_prices);*/

let new_pdt_prices = prices.map(prices=>prices+1);
console.log(prices);
console.log(new_pdt_prices);