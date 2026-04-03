let users = " ";
async function getData()
{
    let resp = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await resp.json();
    display();
}

function display()
{
    let rows = "";
    for (let user of users)
    {
        rows=rows+`<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.address.city}</td>
            <td>${user.company.name}</td>
        </tr>
        `
    }
    document.querySelector('.abc').innerHTML = rows;
     //document.getElementsByTagName('tbody')[0].innerHTML="GM"
     //document.getElementsByClassName('abc')[0].innerHTML="GM"
     //document.getElementById('xyz').innerHTML="GM"
}
getData();