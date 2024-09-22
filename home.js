//add money to the account
/*

s-1: add event handler and prevent page reload after form submit.
s-2:get money to be added to the account balance.
s-3: verify the pin number.

*/





//step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();//prevent page reload after form submit


   //console.log('money add btn clicked')
//    s-2:get money to be added to the account balance.
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    //get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

//s-3: verify the pin number.(wrong way to validate)
    if(pinNumberInput === '1234'){
        console.log('adding money to your account');

        //s-4:get the current balance
        const balance= document.getElementById('account-balance').innerText;
        console.log(balance);

        //s-5:add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        console.log(typeof balanceNumber);
        const newBalance= balanceNumber + addMoneyNumber;
        console.log(newBalance);

        //s-6: Update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;



    }
    else{
        alert('Failed to add money! Please try again');
    }


})