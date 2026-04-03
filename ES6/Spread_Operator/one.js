let a = [10,20,30,40];
let b=[];
for (let element of a){
    b.push(element);
}

//let b = [...a];
console.log(b);
console.log(a);

let a1 = [10,20,30,40];
let b1 = [20,30,40];
let c = [...a1, ...b1];
console.log(c);

let a2 = [10,20,30,40];
let b2 = [...a2, 40,50,60,10];
console.log(b2);