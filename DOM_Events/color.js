function changeColor1()
{
    console.log("Test Case 2");
    let btn1 = document.getElementById("btn1");
    console.log(btn1);
    btn1.innerHTML = "Donald Trump";
    btn1.style.backgroundColor = "Blue";
}
function changeColor2()
{
    console.log("Test Case 3");
    let btn2 = document.getElementsByClassName("btnstyles1")[0];
    console.log(btn2);
    btn2.style.backgroundColor = "Yellow";
}
function changeColor3()
{
    console.log("Test Case 4");
    let btn3 = document.querySelector('.btnstyles2');
    console.log(btn3);
    btn3.style.backgroundColor = "Purple";
}
function changeColor4()
{
    console.log("Test Case 4");
    let btn4 = document.querySelector('.btnstyles3');
    console.log(btn4);
    btn4.style.backgroundColor = "Green";
}