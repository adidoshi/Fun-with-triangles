const form = document.querySelector("#angle");
const inputValue = document.querySelectorAll(".inputAngle");
const outputDiv = document.querySelector(".validTriangle");

form.addEventListener('submit', triangleClickHandler);

let arrayOfAngles = [];

function triangleClickHandler(e){
    e.preventDefault();
    
    for(i=0; i<inputValue.length; i++){
        arrayOfAngles[i] = Number(inputValue[i].value);
    }

    let addition = arrayOfAngles.reduce((sum,num) => sum + num, 0);
    // console.log(addition);

    if(addition === 180) {
        outputDiv.innerText = "Wohoo! these angles can make a triangle";
    }
    else {
        outputDiv.innerText = "Oops! these angles cannot make a triangle";
    }
}