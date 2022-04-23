$(document).ready(function () {
    
    var firstCurrency = '';
    var secondCurrency = '';
    var oneFirstCurrency = $('.one-first-currency');
    var oneSecondCurrency = $('.one-second-currency');
    var resultMoney = $('h2');
    var input = $('input');

    $('.first-currency-div > button').on('click', function (){
        firstCurrency = this.value;
        displayResult();
    });

    $('.second-currency-div > button').on('click', function () {
        secondCurrency = this.value;
        displayResult();
    });

    const displayResult = async function () {

        if (isNaN(input.val()) ){
            alert('Please, enter a number.');
        }
        $.ajax({
            url: `https://api.exchangerate.host/convert?from=${firstCurrency}&to=${secondCurrency}&amount=${input.val()}`,
            success: function (res){
                oneFirstCurrency.text(`1 ${firstCurrency} = ${res.info.rate} ${secondCurrency}`);
                resultMoney.text(res.result);
                $.ajax({
                    url: `https://api.exchangerate.host/convert?from=${secondCurrency}&to=${firstCurrency}`,
                    success: function (res2) {
                        oneSecondCurrency.text(`1 ${secondCurrency} = ${res2.info.rate} ${firstCurrency}`);
                    }
                });
            },
        });
    } 
});

// bu kod piss koddu 