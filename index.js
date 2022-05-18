// console.log(Array.from(document.getElementsByClassName("button"))[0].attributes)
let buttonsArr =Array.from(document.getElementsByClassName("button"));
// console.log(buttonsArr)
let display = document.getElementById("display");

buttonsArr.map(button =>{
    button.addEventListener('click',(t)=>{      
        
        // console.log(t.target.innerText);

        switch(t.target.innerText){
            case '=':
                try{
                display.innerText =eval(display.innerText);
                }catch{display.innerText='Err';}
                break;
            case 'C':
                display.innerText=' ';
                break;
            case '←':
                display.innerText=display.innerText.slice(0,-1);
                break;
            default:
                display.innerText+=t.target.innerText;                            
        }


    });
});
