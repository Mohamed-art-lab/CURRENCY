// Modify the convertCurrency function to add 50 more currencies
function convertCurrency() {
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;
    var amount = document.getElementById("amount").value;

    var apiKey = 'fca_live_zfEQQIvBrrdl1jQRhZy8wyKHyvMasueYl7gZFbJp';
    var apiUrl = `https://v6.exchangerate-api.com/v6/884710e51a1df43336bfa9e5/latest/USD`;

    // exchange rates from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.result === "success") {
                var exchangeRates = data.conversion_rates;

                
                exchangeRates['EUR'] = data.conversion_rates['EUR'];
                exchangeRates['GBP'] = data.conversion_rates['GBP'];
                exchangeRates['JPY'] = data.conversion_rates['JPY'];
                exchangeRates['CAD'] = data.conversion_rates['CAD'];
                exchangeRates['AUD'] = data.conversion_rates['AUD'];
                exchangeRates['INR'] = data.conversion_rates['INR'];
                exchangeRates['CNY'] = data.conversion_rates['CNY'];
                

                // Check if the selected currencies are in the exchange rates
                if (!(fromCurrency in exchangeRates) || !(toCurrency in exchangeRates)) {
                    document.getElementById("result").innerText = "Invalid currency selection.";
                    return;
                }

                var exchangeRate = exchangeRates[toCurrency];
                var convertedAmount = (amount * exchangeRate).toFixed(2);

                var result = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
                document.getElementById("result").innerText = result;
            } else {
                document.getElementById("result").innerText = "Failed to fetch exchange rates. Please try again later.";
            }
        })
        .catch(error => {
            console.error('Error fetching exchange rates:', error);
            document.getElementById("result").innerText = "An error occurred. Please try again later.";
        });
}
