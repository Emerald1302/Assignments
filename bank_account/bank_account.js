balance = 5000;
transactionHistory = [
  "Deposited 10000 into Savings Account",
  "Withdrawn 5000 from Savings Account",
];

function getBalance() {
  return balance;
}

function deposit(amount) {
  balance += amount;
  transactionHistory.push(`Deposited ${amount} into Savings Account`);
}

function withdraw(amount) {
  if(amount > balance){
    console.log("You have insufficient balance.")
  }else{
balance -= amount;
  transactionHistory.push(`Withdrawn ${amount} from Savings Account`);
  }
}

function getTransactionHistory() {
    let history = "Transaction History\n";
    for (let i = 0; i < transactionHistory.length; i++) {
      history += `${i + 1} ${transactionHistory[i]}\n`;
    }
    return history;
}

// Instructor's test cases

console.log(getBalance());
// Expected Output: 5000

deposit(4000);
console.log(getBalance());
// Expected Output: 9000

withdraw(3000);
console.log(getBalance());
// Expected Output: 6000

console.log(getTransactionHistory());
/* Expected Output:

Transaction History
1) Deposited 10000 into Savings Account
2) Withdrawn 5000 from Savings Account
3) Deposited 4000 into Savings Account
4) Withdrawn 3000 from Savings Account
*/


