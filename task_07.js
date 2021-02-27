//The function converts temperature from celsius to fahrenheit
function TempCelsius(fahrenheit){
    var celsiusValue = (5/9)*(fahrenheit - 32);
    console.log(celsiusValue);
}

function TempFahrenheit(celsius){
    var fahrenheitValue = (9/5)*celsius + 32;
    console.log(fahrenheitValue);
}

TempCelsius(32);
TempFahrenheit(36);