class Test{
    constructor(){
        console.log("Special Method");
    }
    m1(){
        console.log("Test class m1()");
    }
    m2(){
        console.log("Test class m2()");
    }
}

let t1 = new Test();
t1.m1();
t1.m1();
t1.m2();
let t2 = new Test();
let t3 = new Test();