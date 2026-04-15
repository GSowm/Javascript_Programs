class Account{
    constructor(name,email, addr) {
        acc_Name = name;
        acc_Email = email;
        acc_Addr = addr;        
    }
    get_Bal(){
    }
}

class SavingsAccount extends Account{
    min_Bal = 500;
    constructor(id,name,email,amount,addr) {
        super(name,email,addr);
        this.acc_ID = id;
        this.acc_Bal = amount;       
    }
    get_Bal(){
        return this.acc_Bal-this.min_Bal;
    }
}
let sa1 = new SavingsAccount(101, "Rahul","rg@gmail.com",5000,"Bang");
console.log(sa1);

class CurrentAccount extends Account{

}