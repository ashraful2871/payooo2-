// console.log("loaded");
// document
//   .getElementById("btn-add-money")
//   .addEventListener("click", function (event) {
//     event.preventDefault();

//     // const addMoney = document.getElementById("input-add-money").value;
//     // const addMoneyNumber = parseFloat(addMoney);
//     // getInputFieldValueById();
//     // console.log("Ash");
//     const addMoney = getInputFieldValueById("input-add-money");
//     const pin = getInputFieldValueById("input-pin-number");
//     console.log("get value id by call with function", addMoney, pin);
//   });

//---------------------Add Money--------------------
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById("input-add-money");
    const pinNumber = getInputFieldValueById("input-pin-number");

    if (isNaN(addMoney)) {
      alert("Failed to Add Money");
      return;
    }
    if (pinNumber === 12) {
      // wrong way to valid pin number
      const balance = getTextFieldValueById("account-balance");

      const newBalance = balance + addMoney;
      document.getElementById("account-balance").innerText = newBalance;

      // add to transaction History
      const p = document.createElement("p");
      p.innerText = `Added ${addMoney} TK. New Balance: ${newBalance}`;
      console.log(p);

      // should be a common function
      document.getElementById("transaction-container").appendChild(p);
    } else {
      alert("Failed Add Money");
    }
  });

//-------------------------Cash Out-------------------------------

document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOutMoney = getInputFieldValueById("input-cash-out-amount");
    const cashOutPin = getInputFieldValueById("input-cash-out-pin-number");
    if (isNaN(cashOutMoney)) {
      alert("Failed to Cash out");
      return;
    }

    //wrong way to verify pin
    if (cashOutPin === 12) {
      const balance = getTextFieldValueById("account-balance");
      if (cashOutMoney > balance) {
        alert("Not Enough Money To Cash Out");
        return;
      }
      const newBalance = balance - cashOutMoney;
      document.getElementById("account-balance").innerText = newBalance;

      // add to transaction history
      const div = document.createElement("div");
      div.classList.add("bg-blue-300");
      div.innerHTML = `
        <h4 class="text-2xl font-bold">Cash Out</h4>
        <p>${cashOutMoney} Tk Withdraw. New Balance ${newBalance}</p>`;

      document.getElementById("transaction-container").appendChild(div);
    } else {
      alert("Failed to Cash Out MOney");
    }
  });

document
  .getElementById("show-add-money")
  .addEventListener("click", function () {
    showSectionById("add-money-form");
  });

document.getElementById("show-cash-Out").addEventListener("click", function () {
  showSectionById("cash-out-form");
});

document
  .getElementById("show-transaction")
  .addEventListener("click", function () {
    showSectionById("transaction-history");
  });
