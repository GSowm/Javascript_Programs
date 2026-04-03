let employees =[{eid:101, ename:'Rahul', esal:45000},
    {eid:102, ename:'Sonia', esal:55000}
]
function create_Employee(emp,callback){
    setTimeout(()=>{
        employees.push(emp);
        callback();
    }, 4000)
}
function get_Employee(){
    setTimeout(()=>{
        let rows =" ";
        for(let emp of employees){
            rows = rows+`
            <tr>
            <td>${emp.eid}</td>
            <td>${emp.ename}</td>
            <td>${emp.esal}</td>
            </tr> `
        }
        document.getElementById('tdata').innerHTML =rows;
    }, 2000)
}
create_Employee({eid:103, ename:"Priya",esal:65000},get_Employee);