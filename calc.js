(function(){
    let display = document.querySelector('.display');
    let buttons = document.querySelectorAll('.button');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function (button)  {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            display.value += value;
        })
    });
    equal.addEventListener('click', function (e)  {
        
        try {
            display.value=eval(display.value);
        } catch (err) {

            alert("invalid");
        }
    })
    clear.addEventListener('click', function(){
        display.value=" ";
    })

})();