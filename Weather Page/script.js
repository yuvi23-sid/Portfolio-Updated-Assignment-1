$(document).ready(function () {
    $('#convertBtn').click(function () {
        // Get the temperature from the input
        const temperature = parseFloat($('#temperature').val());
        const conversionType = $('#conversionType').val();
 
        if (!isNaN(temperature)) {
            let result;
 
            if (conversionType === 'celsiusToFahrenheit') {
                // Convert Celsius to Fahrenheit
                result = (temperature * 9/5) + 32;
            } else if (conversionType === 'fahrenheitToCelsius') {
                // Convert Fahrenheit to Celsius
                result = (temperature - 32) * (5/9);
            }
 
            // Display the result
            $('#convertedResult').text(`${result.toFixed(2)}°`);
        } else {
            $('#convertedResult').text('Please enter a valid temperature.');
        }
    });
});