//creating random number

let generatePinButton=document.querySelector(".generate-btn");
let form=document.querySelector(".form-control")

generatePinButton.addEventListener("click" , (e)=>{
    let createRandomNumber= Math.floor(1000+ Math.random()*9000);
    form.value=createRandomNumber;
})



//Matching pin and input number

let input=document.querySelector("#form-control")
let numberButton=document.querySelectorAll(".button")

for (let index = 0; index < numberButton.length; index++) {
    const numbers = numberButton[index];
    numbers.addEventListener("click" , (n) =>{
        let onlyNumber=n.target.innerHTML;
        if (onlyNumber=="C") {
            return input.value="";
        } else if (onlyNumber=="&lt;") {
            return input.value=input.value.substr(0,input.value.length-1)
        }
        input.value+=onlyNumber;
    })
    
}

//displaying the result

let negetive=document.querySelector("#negetive")
let positive=document.querySelector("#positive")
let submiteButton= document.querySelector(".submit-btn")

submiteButton.addEventListener("click" , () => {
    let resultNumber=form.value;
    let inputNumber=input.value;
    if (inputNumber=="") {
        
        alert("please enter the pin code ")
    }
    //if answer is correct
    else if (resultNumber==inputNumber) {
        if (positive.style.display="none") {
            positive.style.display="block"
            negetive.style.display="none"
        }
    }
    //if answer is wrong 
     else if (resultNumber!==inputNumber) {
        // let action=document.querySelector(".action-left")
        
        // if (action.innerHTML="3 try left") {
        //     action.innerHTML="2 try left"
        // }
        if (negetive.style.display="none") {
            negetive.style.display="block"
            positive.style.display="none"
        }
    }
})