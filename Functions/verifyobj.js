let user = {};
let emp = {
    eid:101,
    ename:"Rahul",
    esal:45000
}

console.log(emp.eid);
console.log(emp.email);
console.log(emp.length);
console.log(Object.keys(emp));
console.log(Object.keys(emp).length);

if (Object.keys(user).length>0) {
    console.log("Not Empty Object")
} else {
    console.log("Empty Object")
}

Object.keys(emp).length>0 ? console.log("Object not empty") : console.log("Object is empty");