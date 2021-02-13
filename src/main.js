import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchanger from './currency-exchanger.js';

function clearFields() {
  $('.showErrors').text("");
  $('.showExchange').text("");
}

function getElements(response) {
  if (response.result === "success") {
    clearFields();
    $('.showExchange').text(`${Math.round(response.conversion_result / response.conversion_rate)} ${response.base_code} = ${response.conversion_result} ${response.target_code}`);
  } else if (response.result === "error") {
    clearFields();
    $('.showErrors').text(`ERROR: CURRENCY UNRECOGNIZED`);
  }
}

let selection = document.querySelector('select');
let result = document.querySelector('h3');

$(selection).ready(function () {
  $("#getExchange").click(function () {
    result.innerText = selection.options[selection.selectedIndex].value;
    let amount = $('#dollarAmount').val();
    let currencyCode = result.innerText;
    CurrencyExchanger.getExchange(currencyCode, amount)
      .then(function (response) {
        if (amount < 1) {
          clearFields();
          $('.showErrors').text(`ERROR: PLEASE ENTER VALID DOLLAR AMOUNT`);
        }
        getElements(response);
      });
  });
});