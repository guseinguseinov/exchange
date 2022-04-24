var firstButtons = document.querySelectorAll('.first-currency-div > button');
var secondButtons = document.querySelectorAll('.second-currency-div > button');
var firstCurrency = 'USD';
var secondCurrency = 'RUB';
var userInputMoney = document.querySelector('input');
var firstCurrencyParagraph = document.querySelector('.one-first-currency');
var secondCurrencyParagraph = document.querySelector('.one-second-currency');
var resultMoney = document.querySelector('h2');

firstButtons.forEach( x => {
    x.addEventListener('click', function()   {
        firstCurrency = this.value;
        convert(firstCurrency, secondCurrency, userInputMoney.value);
    });
});

secondButtons.forEach( x => {
    x.addEventListener('click', function()   {
        secondCurrency = this.value;
        convert(firstCurrency, secondCurrency, userInputMoney.value);
    });
});

const convert = function (firstMoneyCurrency, secondMoneyCurrency, money) {
    let amountMoney = String(money);
    if (amountMoney.indexOf(',') !== -1) amountMoney = amountMoney.replace(',', '.');
    
    
    if ( isNaN(amountMoney) ) {
        alert('Please, enter a number.');
    }else {
        fetch(`https://api.exchangerate.host/convert?from=${firstMoneyCurrency}&to=${secondMoneyCurrency}&amount=${amountMoney}`,)
        .then(res => res.json())
        .then(data => {
            firstCurrencyParagraph.innerHTML = `1 ${firstMoneyCurrency} = ${data.info.rate} ${secondMoneyCurrency}`;
            resultMoney.innerHTML = data.result;   
            console.log(data);

            // for second p tag  
            fetch(`https://api.exchangerate.host/convert?from=${secondMoneyCurrency}&to=${firstMoneyCurrency}&amount=${amountMoney}`,)    
            .then(res => res.json())
            .then(data => secondCurrencyParagraph.innerHTML = `1 ${secondMoneyCurrency} = ${data.info.rate} ${firstMoneyCurrency}`);
        })
        .catch (e => alert('nese sehv oldu'));
    } 

    
};

convert(firstCurrency, secondCurrency, 1);