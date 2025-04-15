const login_Page = document.getElementById('login-pg')
const menu_Page = document.getElementById('menu-pg')
const deposit_Page = document.getElementById('deposit-pg')
const withdraw_Page = document.getElementById('withdraw-pg')
const pinBox = document.getElementById('pin-box')
const depositBox = document.getElementById('depo-box')
const withdrawBox = document.getElementById('with-box')
const loginBtn = document.getElementById('login-btn')
const logoutBtn = document.getElementById('logout-btn')
const balanceBtn = document.getElementById('balance-btn')
const depoBtn = document.getElementById('depo-btn')
const withdBtn = document.getElementById('withdraw-btn')
const confirm_depoBtn = document.getElementById('internal-depo-btn')
const confirm_withdBtn = document.getElementById('internal-withdraw-btn')
const cancelBtn = document.getElementById('cancel-btn')
const withd_cancelBtn = document.getElementById('sec-cancel-btn')
const balance_am = document.getElementById('balance-am')
const error_message = document.getElementById('error-msg')
let correctpin = "1234";
let balance = 1000;
let attempts = 3;


loginBtn.addEventListener("click", validation)
function validation() {
    const userpass = pinBox.value;
    if (userpass === correctpin) {
        login_Page.style.display = "none";
        menu_Page.style.display = "flex";
    } else {
        attempts--;
        if (attempts > 0) {
            error_message.textContent = `Incorrect Pin. ${attempts} Attempts left`;
            pinBox.value = '';
        } else {
            error_message.textContent = "Account locked. Please try again later.";
            document.getElementById("pin-box").disabled = true;
            pinBox.value = '';
        }
    }
}

balanceBtn.addEventListener("click", () => {
    alert(`Your balance is ${balance}`)
});

logoutBtn.addEventListener("click", () => {
    menu_Page.style.display = "none";
    login_Page.style.display = "flex";
    pinBox.value = '';
    error_message.textContent = 'Have a nice day.'
    error_message.style.fontSize = "20px";
});

depoBtn.addEventListener("click", () => {
    menu_Page.style.display = "none";
    deposit_Page.style.display = "flex";
});

withdBtn.addEventListener("click", () => {
    menu_Page.style.display = "none";
    withdraw_Page.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
    deposit_Page.style.display = "none";
    menu_Page.style.display = "flex";
});

withd_cancelBtn.addEventListener("click", () => {
    withdraw_Page.style.display = "none";
    menu_Page.style.display = "flex";
});

confirm_depoBtn.addEventListener("click", confirmingDeposit)
function confirmingDeposit() {
    const depoAmount = parseInt(depositBox.value);
    if (depoAmount > 0) {
        balance += depoAmount;
        deposit_Page.style.display = "none";
        menu_Page.style.display = "flex";
        balance_am.textContent = `Balance: $${balance}`;
        depositBox.value= '';
    } else {
        alert("Please enter a valid Amount")
        depositBox.value= '';
    }
}

// confirm_withdBtn.addEventListener('click',()=>{
//     const withdAmount = parseInt(withdrawBox.value);
//     if (withdAmount > 0) {
//         balance
//     } else {
        
//     }
// });

confirm_withdBtn.addEventListener("click", confirmingWithdraw)
function confirmingWithdraw() {
    const withdAmount = parseInt(withdrawBox.value);
    if (withdAmount < balance) {
        balance -= withdAmount;
        withdraw_Page.style.display = "none";
        menu_Page.style.display = "flex";
        balance_am.textContent = `Balance: $${balance}`;
        withdrawBox.value = '';
    } else {
        alert("Please enter a valid Amount")
        withdrawBox.value = '';
    }
}