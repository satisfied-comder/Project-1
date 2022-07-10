let input = document.getElementById('input')
let buttons = document.querySelectorAll('button')
let inputvalue = '';
for(item of buttons){

    item.addEventListener('click', (e) => {
        
        buttontext = e.target.innerText;
        if (buttontext == 'X') {
            buttontext = '*';
            inputvalue += buttontext;
            if (inputvalue == "*") {
                inputvalue = "";
            }
            // input.value = inputvalue

        }
        else if (buttontext == 'C') {
            inputvalue = '';
            // input.value = inputvalue;

        }
            
        else if (buttontext == '=') {
            inputvalue = eval(inputvalue)
            // input.value = inputvalue
        }
        else if (buttontext == '%') {
            if (inputvalue.length >=1 )
                inputvalue += '/100*'
            
            // let t = inputva
            inputvalue = eval(inputvalue)
            // input.value = inputvalue        
        }
        else if (buttontext == 'Back') {
            inputvalue = inputvalue.substring(0, inputvalue.length-1)
            input.value = inputvalue
            

        }
        else {
            inputvalue += buttontext
            // input.value = inputvalue
        }
        if (inputvalue == undefined) {
            inputvalue = ''
        }
        if (inputvalue == "/" || inputvalue == "+" || inputvalue == "-") {
            inputvalue = ""
        }
    
        input.value = inputvalue
            
    })

}