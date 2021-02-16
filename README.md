## Currency Exchanger
#### Epicodus Week 6 Project: Asynchrony and APIs
***By Andrew Lawson © 2021***

## *Description:*
A webpage that shows the exchange rate of US dollar amounts provided by the user. This project utilizes API calls to receive the data needed to supply exchange rates.

## *Tests*
#### Test 1:
Describe: CurrencyExchanger()
Test: Gets data from ExchangeRate API using US dollar amount and target currency-code chosen by user.
Code: CurrencyExchanger.getExchange(GBP, 1);
Expect(response.conversion_result).toEqual(0.7226);
#### Test 2:
Describe: selection()
Test: Gets currency-code from chosen country.
Code: result.innerText = United Kingdom Pound Sterling (GBP);
Expect(currencyCode).toEqual(GBP);


## *Setup Instructions:*
#### Step 1: Acquire Exchange Rate API Key:
1. Go to https://exchangerate-api.com in your browser.
2. Enter email address in the prompt and click `Get Free Key`.
3. Find your key in the confirmation email sent from ExchangeRate-API.
#### Step 2: Set Up Environment:
1. Copy https://github.com/andyL89/currency-exchanger.
2. Run `$ git clone https://github.com/andyL89/currency-exchanger` in the terminal to add directory to your computer.
3. Navigate to the top level of the directory.
4. Install packages locally by running `$ npm install` in the terminal.
5. Create `.env` file with the command `$ touch .env` in the terminal.
6. Add your newly acquired ExchangeRate-API key to the .env file in this format: `API_KEY=(YOUR API KEY)`; omit parenthesis.
5. Create production environment by running `$ npm run build` in the terminal.
6. View project in browser by running `$ npm run start`.

## *Tecnologies Used:*
* @babel/core 7.6.4
* @babel/plugin-transform-modules-commonjs 7.6.0
* bootstrap 4.6.0
* clean-webpack-plugin 3.0.0
* css-loader 3.2.0
* dotenv-webpack 6.0.0
* eslint 6.3.0
* eslint-loader 3.0.0
* html-webpack-plugin 3.2.0
* jest 24.9.0
* jquery 3.5.1
* popper.js 1.16.1
* style-loader 1.0.0
* webpack 4.39.3
* webpack-cli 3.3.8
* webpack-dev-server 3.8.0
* ExchangeRate-API

## *Unsupported Currencies:*
* North Korean Won (KPW)

## *License*

[MIT](LICENSE.txt)

## Contact Information

Andrew Lawson : alawson89@gmail.com