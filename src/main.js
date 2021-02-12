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

$(document).ready(function() {
  $("#exchangeRate").click(function() {
    let currencyCode = ($('#countryCode').val());
    CurrencyExchanger.getExchange(currencyCode)
      .then(function(response) {
        getElements(response);
      });
  });
});