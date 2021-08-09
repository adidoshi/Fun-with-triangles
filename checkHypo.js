const form = document.querySelector("#formHypo");
const hypoShow = document.querySelector(".hypoShow");
const inputSides = document.querySelectorAll(".inputSide");

let lengthA, lengthB;


form.addEventListener('submit', (e) => {
    e.preventDefault();

    lengthA = inputSides[0].value;
    lengthB = inputSides[1].value;

    const hypotenuse = Math.sqrt((lengthA * lengthA) + (lengthB * lengthB)).toFixed(4); 
    hypoShow.innerText = hypotenuse;
})