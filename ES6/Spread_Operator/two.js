let emp = {
    eid:101,
    ename:"Rahul",
    email:"rg@gmail.com"
}
let details = {
    email:"rg1@gmail.com",
    esal:45000,
    loc:"Bangalore"
}
let emp_Details = {...emp, ...details}
console.log(emp_Details);