let emp = {
    eid: 101,
    ename: "Rahul",
    ename: "Sonia",
    ename: "Priyanka", // overridden
}
console.log(emp);

let a = {};
let employee = {
    eid: 101,
    ename: "Rahul",
    esal: 45000.45
}
console.log(a);
console.log(employee);
console.log(employee.eid);
console.log(employee.ename);
console.log(employee.esal);
console.log(employee.loc); // undefined