import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchanger from './currency-exchanger.js';

function getElements(response) {
  if (response) {
    $('.showExchange').text(`Exchange Rate for ${response.base_code} to ${response.target_code} is ${response.conversion_rate}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}


// selection.addEventListener('change', () => {
//   result.innerText = selection.options[selection.selectedIndex].value;
// });
let selection = document.querySelector('select');
let result = document.querySelector('h3');

$(selection).change(function () {
  result.innerText = selection.options[selection.selectedIndex].value;
  let currencyCode = result.innerText;
  CurrencyExchanger.getExchange(currencyCode, amount)
    .then(function (response) {
      getElements(response);
    });
});