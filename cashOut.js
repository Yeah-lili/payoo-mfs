// console.log('cash out file connected')

document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    console.log('cash out button clicked');

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);

    const pinNumber = document.getElementById('input-cash-out-pin').value;


    console.log(cashOut,pinNumber);
    //wrong way to verify pin Number

    if(pinNumber === '1234'){

        const balance = document.getElementById('account-balance').innerText
        const balanceNumber = parseFloat(balance);

        //reduce the balance
        const newBalance = balanceNumber - cashOutNumber;
        
        //update the UI
        document.getElementById('account-balance').innerText= newBalance;


        console.log(balance);
        console.log('cash out successful');
    }
    else{
        alert('Cash Out Unsuccessful! Enter the right credentials!');
    }


})
