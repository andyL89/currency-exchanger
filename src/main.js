import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchanger from './currency-exchanger.js';

function getElements(response) {
  if (response) {
    $('.showExchange').text(`Exchange Rate for ${response.base_code} is ${response.conversion_rates.KRW}`);
    console.log(response.conversion_rates.USD);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $("#exchangeRate").click(function() {
    let dollars = parseInt($('#amount').val());
    CurrencyExchanger.getExchange()
      .then(function(response) {
        getElements(response);
      });
  });
});