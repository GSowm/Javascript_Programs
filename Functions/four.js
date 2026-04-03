let array1 = [];
let array2 = [1,2,3,4,5,6,7,8,9];

if (array1.length > 0) // check if array is empty or not
{
    console.log("Array1 is not empty");
}
else
{
    console.log("Array1 is empty");
}

if (array2.length > 0)
{
    console.log("Array2 is not empty");
}
else
{
    console.log("Array2 is empty");
}

console.log(array1.length);
console.log(array2.length);
console.log(array1>0);
console.log(array2>0);

array1.length>0 ? console.log("Array1 is not empty") : console.log("Array1 is empty");
array2.length>0 ? console.log("Array2 is not empty") : console.log("Array2 is empty");