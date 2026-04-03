let enames = ["RG","SG","PG","NM"];
console.log(enames.length);

/*for (let i=0; i<=enames.length-1; i++)
{
    console.log(enames[i]);
}*/

let i=0;
/*while(i<=enames.length-1)
{
    console.log(enames[i]);
    i++;
}*/

/*do
{
    console.log(enames[i]);
    i++;
}while(i<=enames.length-1)*/

for(let ename of enames)
{
    console.log(ename);
}