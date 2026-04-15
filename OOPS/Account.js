class Account{
    acc_Bal;
    acc_Name="Rahul";

    open_Acc(){
        console.log("Account opened successfully");
    }

    depoit(){
        console.log("Amount Deposited");
    }

    withdrawal(){
        console.log("Insufficient Balance");
    }

    get_Bal(){
        console.log("server busy");
    }
}

let a1 = new Account();
a1.open_Acc();
a1.depoit();
a1.withdrawal();
a1.get_Bal();
console.log(a1.acc_Name);

let a2 = new Account();
console.log(a2.acc_Bal);

console.log(a1);
console.log(a2);