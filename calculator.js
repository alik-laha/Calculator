let input = document.getElementById("display2")
let buttons = document.querySelectorAll('button')
let string = "";
let arr = Array.from(buttons)
arr.forEach(button => {
    button.addEventListener('click', (b) => {
        if (b.target.innerHTML == "=") {
            string = eval(string);
            input.value = string;
        }
        else if (b.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (b.target.innerHTML == 'Del') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += b.target.innerHTML;
            input.value = string;
        }
    })
})