var userPin = 1234;
var balance = 10000;
var actionType = "";


function insertCard() {
    document.getElementById("insertCardBtn").style.display = "none";
    document.getElementById("pin-input").style.display = "block";
    document.getElementById("user-options").style.display = "none";
    document.getElementById("action-area").style.display = "none";
    document.getElementById("amountInput").value = "";
    document.getElementById("pin").value = "";
}


function checkPin() {
    var pin = document.getElementById("pin").value;
    if (Number(pin) === userPin) {
        alert("Correct PIN!");
        document.getElementById("pin-input").style.display = "none";
        document.getElementById("user-options").style.display = "block";
    } else {
        alert("Invalid PIN! Try again.");
        document.getElementById("pin").value = "";
    }
}

function balanceInquiry() {
    alert("Your current balance is Rs " + balance);
    document.getElementById("action-area").style.display = "none";
}


function showDeposit() {
    actionType = "deposit";
    document.getElementById("action-area").style.display = "block";
    document.getElementById("amountInput").value = "";
}

function showWithdraw() {
    actionType = "withdraw";
    document.getElementById("action-area").style.display = "block";
    document.getElementById("amountInput").value = "";
}


function submitAmount() {
    var amt = Number(document.getElementById("amountInput").value);
    if (amt <= 0 || isNaN(amt)) {
        alert("Please enter a valid amount.");
        return;
    }
    if (actionType === "deposit") {
        balance += amt;
        alert("Deposited Rs " + amt + ". New balance: Rs " + balance);
        document.getElementById("action-area").style.display = "none";
    } else if (actionType === "withdraw") {
        if (amt > balance) {
            alert("Insufficient balance!");
        } else {
            balance -= amt;
            alert("Withdrawn Rs " + amt + ". New balance: Rs " + balance);
            document.getElementById("action-area").style.display = "none";
        }
    }
}


function cancelSession() {
    document.getElementById("user-options").style.display = "none";
    document.getElementById("pin-input").style.display = "none";
    document.getElementById("action-area").style.display = "none";
    document.getElementById("insertCardBtn").style.display = "inline-block";
    alert("Session cancelled. Please insert card again.");
}
