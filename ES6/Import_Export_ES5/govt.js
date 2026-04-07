let tax = 18;
let get_Tax=()=>{
    return tax;
}

class Tax{
    constructor(){
        console.log('Tax class constructor');
    }
}
module.exports = {tax, Tax};