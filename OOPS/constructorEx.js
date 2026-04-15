class ConstructorEx {
    acc_Id;
    acc_Name;
    acc_Bal;
    constructor(id, name, amount){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=amount;
    }
}
let c1 = new ConstructorEx(101, "Rahul", 10000);
let c2 = new ConstructorEx(102, "Sonia", 20000);
let c3 = new ConstructorEx(103, "Rahul", 30000);
console.log(c1);
console.log(c2);
console.log(c3);