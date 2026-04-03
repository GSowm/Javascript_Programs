/*let find = (value)=>{
    let x                 //without using find
    let num=undefined;
    for(let i=0;i<=numbers.length-1;i++)
    {
        if(numbers[i]===value)
        {
            num=numbers[i];
        }
    }
return num;
}

let num=find(10551)
console.log(num)*/

/*let find = (value)=>{
    let numbers=[11,7,8,99,101,1055]
    let num=undefined;
    for(let i=0;i<=numbers.length-1;i++){
        if(numbers[i]===value){
            num=numbers[i];
        }
    }
return num;
}

let num=find(11);
console.log(num);*/

let numbers=[11,7,8,99,101,1055];
let result = numbers.find (num=>num===1)
console.log(result);