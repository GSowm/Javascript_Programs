let employees = 
[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:55000},
    {eid:103,ename:"Priyanka",esal:65000},
    {eid:104,ename:"Modi",esal:75000},
    {eid:105,ename:"Amith",esal:85000},
    {eid:106,ename:"DK Shiva Kumar",esal:95000}
]

function display()
{
    console.log("Test Case 123");

    let rows = '';
    for (let emp of employees)
    {
        rows = rows+`
        <tr>
            <td>${emp.eid}</td>
            <td>${emp.ename}</td>
            <td>${emp.esal}</td>
        </tr>
        `
    }
    document.getElementById("abc").innerHTML = rows;
}   