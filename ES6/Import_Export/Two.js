let numbers = [10,20,30,10,20,30,40,50];
console.log(numbers);

let uniqueNumbers = [];
for (let num of numbers) {
  if (!uniqueNumbers.includes(num)) {
    uniqueNumbers.push(num);
  }
}
console.log(uniqueNumbers);
