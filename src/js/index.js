
let str = document.querySelector(".str");
let regNum = new RegExp('^[1-9]+$');

 setInterval(function RandomStr() {
    var result           = '';
    var char       = 'yFVz0123456789';
    var charLength = char.length;
    for ( var i = 0; i < 5; i++ ) {
       result += char.charAt(Math.floor(Math.random() * charLength));
    }
    str.innerText = result;
    function ChangeColor(){    
        if(str.innerText.match(regNum)){
            str.style.color = 'blue';
        } else if (str.innerText.match(/0/)) {
           str.style.color = 'transparent';
        } else {
           str.style.color = 'red';
        }
    };
    ChangeColor();
    console.log(result);
 }, 3000);









