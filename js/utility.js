/**
 * common shared function here
 */

// console.log("get value by id");
// function getInputFieldValueById() {
//   const addMoney = document.getElementById("btn-add-money").value;
// }

// function getInputFieldValueById(id) {
//   const inputValue = document.getElementById(id).value;
//   return inputValue;
// }

function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputValueNumber = parseFloat(inputValue);

  return inputValueNumber;
}

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textValueNumber = parseFloat(textValue);
  return textValueNumber;
}

function showSectionById(id) {
  //hidden all section
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById("transaction-history").classList.add("hidden");

  //show one section which section is want
  document.getElementById(id).classList.remove("hidden");
}
