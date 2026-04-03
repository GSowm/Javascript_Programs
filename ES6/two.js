let numbers = [0,1,2,3,4,5,6,7,8,9,10,1055,232]
/*let even_no = [];
for (let num of numbers)
{
    if (num%2 === 0)
    {
        even_no.push(num);
    }
}
console.log(even_no);*/

/*let even_no = numbers.filter((num) => {
    return num%2 === 0
})
console.log(even_no);*/

let even_no = numbers.filter(num => num%2 === 0)
console.log(even_no);