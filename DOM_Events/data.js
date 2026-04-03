function get_DT()
{
    console.log("Test Case-Event");
    let cdt = new Date().toLocaleString();
    //document.writeln(cdt);
    
    //let pTag = document.getElementById("xyz");
    //pTag.innerHTML = cdt;

    //document.getElementById("xyz").innerHTML = cdt;

    let pTag = document.getElementsByTagName('p');
    console.log(pTag);
    pTag.innerHTML = new Date().toDateString();
}