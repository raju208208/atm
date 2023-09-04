
const prompt = require('prompt-sync')();


var Notes_2000 = false;
var Notes_500 = true;
var Notes_200 = false;
var Notes_100 = true;





const SBI = {
    UserName: "Raju",
    Password: 2088,
    TransferUserName: "Mani",
    AccountNumber: "767508791122"

}

const HDFC = {
    UserName: "Raj",
    Password: 2089,
    TransferUserName: "Vasu",
    AccountNumber: "767508791133"



}
const AXIS = {
    UserName: "Revathi",
    Password: 2099,
    TransferUserName: "Hema",
    AccountNumber: "767508791133"



}
var BankBAlance = 1000;
var TransferBankBalance = 1000;
var printMiniStatement = [];

let user = prompt("enter your name : ");
console.log(user)

let _password = parseInt(prompt("enter the password : "));
console.log(_password)

if ((user === SBI.UserName && _password === SBI.Password) || (user === HDFC.UserName && _password === HDFC.Password) || (user === AXIS.UserName && _password === AXIS.Password)) {

    console.log("WellCome To The Atm Process ")
    while (true) {
        let options = {
            deposit: '1',
            Withdraw: "2",
            
            balanceEnquiry: "3",
            MoneyTransfer: "4",
            MiniStatement: "5",
            Exit: '6'

        }
        console.table(options)

        let option = prompt("choose your option : ")


        if (option == options.deposit) {
            console.log("deposit")
            var depositAmount = parseInt(prompt("Enter the  deposit amount:  "));
            if (depositAmount > BankBAlance || depositAmount < BankBAlance || depositAmount == BankBAlance) {
                BankBAlance += depositAmount
                var PrintdepositAmount = `$${depositAmount} amount deposited successfully.`
                printMiniStatement.push(PrintdepositAmount)



            }
        }

        else if (option == options.Withdraw) {
            console.log("Withdraw")
            var WithdrawAmount = parseInt(prompt("Enter The Amount You Want: "));
            if (WithdrawAmount <= BankBAlance) {
                BankBAlance -= WithdrawAmount;
                var PrintWithdrawAmount = `$${WithdrawAmount} amount withdraw successfuly`;
                printMiniStatement.push(PrintWithdrawAmount);

                var count = 0;

                if (Notes_2000 && WithdrawAmount >= 2000) {
                    var Notes_count_2000 = (Math.floor(WithdrawAmount / 2000))
                    console.log(Notes_count_2000, "==> 2000 notes")
                    count = count + Notes_count_2000;
                    WithdrawAmount -= ((Notes_count_2000 * 2000));
                }
                if (Notes_500 && WithdrawAmount >= 500) {
                    var Notes_count_500 = (Math.floor(WithdrawAmount / 500))
                    console.log(Notes_count_500, "==> 500 notes")
                    count = count + Notes_count_500;
                    WithdrawAmount -= ((Notes_count_500 * 500));
                }

                if (Notes_200 && WithdrawAmount >= 200) {
                    var Notes_count_200 = (Math.floor(WithdrawAmount / 200))
                    console.log(Notes_count_500, "==> 500 notes")
                    count = count + Notes_count_200;
                    WithdrawAmount -= ((Notes_count_200 * 200));
                }
                if (Notes_100 && WithdrawAmount >= 100) {
                    var Notes_count_100 = (Math.floor(WithdrawAmount / 100))
                    console.log(Notes_count_100, "==> 100 notes")
                    count = count + Notes_count_100;
                    WithdrawAmount -= ((Notes_count_100 * 100)); 
                }
                console.log("Notes_count:", count)


            } else { console.log('Insufficient Balance') }

        }

        else if (option == options.balanceEnquiry) {
            console.log("balance Enquiry")
            console.log(BankBAlance);

        }

        else if (option == options.MoneyTransfer) {
            console.log("Money Transfer")
            var TransferUserNameID = prompt("Enter the TransferUserName: ")
            var TransferAccountNumber = prompt("Enter AccountNumber: ")
            if ((TransferUserNameID === SBI.TransferUserName && TransferAccountNumber === SBI.AccountNumber) || (TransferUserNameID === HDFC.TransferUserName && TransferAccountNumber === HDFC.AccountNumber) || (TransferUserNameID === AXIS.TransferUserName && TransferAccountNumber === AXIS.AccountNumber)) {

                var TransferAmount = parseInt(prompt("Enter the  Transfer amount:  "));
                if (TransferAmount <= BankBAlance) {
                    TransferBankBalance += TransferAmount
                    BankBAlance -= TransferAmount;
                    var PrintTransferAmount = `$${TransferAmount} amount transfered successfully to ${TransferUserNameID}`;
                    printMiniStatement.push([PrintTransferAmount])
                }
                else { console.log('Insuffecinet Amount') }





            }
            // else{
            //     console.log("invalid credentials")
            // }
        }

        else if (option == options.MiniStatement) {
            console.log("Mini Statement")
            console.log(printMiniStatement)

        }



        else if (option == options.Exit) {
            console.log("Exit")
            break;


        }


    }

}

else {
    console.log('Invalid Username or Password')
}

