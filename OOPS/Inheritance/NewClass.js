class Parent{
    m1(){
        console.log("Parent Class - M1 method");
    }
    m2(){
        console.log("Parent Class - M2 method");
    }
}
class Child extends Parent{
    m3(){
        console.log("Child class - M3 method");
    }
}
let c1 = new Child();
c1.m1();
c1.m2();
c1.m3();