const area = document.querySelectorAll(".area");
const areaShow = document.querySelectorAll(".areaShow");
const inputOptionOne = document.querySelectorAll(".inputInOption1");
const inputOptionTwo = document.querySelectorAll(".inputInOption2");
const inputOptionThree = document.querySelectorAll(".inputInOption3");
const error = document.querySelector(".error");
const outputDiv = document.querySelectorAll(".output");
const formula = document.querySelector('#formula');

const show1 = document.querySelector("#show1");
const show2 = document.querySelector("#show2");
const show3 = document.querySelector("#show3");

formula.addEventListener("change", function() {
    if (this.value == "baseHeight") {
      show1.style.display = "block";
      show2.style.display = "none";
      show3.style.display = "none";
    }
    else if (this.value == "threeSides") {
       show2.style.display = "block";
       show1.style.display = "none";
       show3.style.display = "none";
    }
    else {
        show3.style.display = "block";
        show1.style.display = "none";
        show2.style.display = "none";
    }
  });

  document.forms[1].addEventListener('submit', (e) => {
      e.preventDefault();
      const base = inputOptionOne[0].value;
      const height = inputOptionOne[1].value;

      const area = (base * height) / 2;

      areaShow[0].innerHTML = area;
  }, false);

  document.forms[2].addEventListener('submit', (e) => {
    e.preventDefault();
    error.style.display = "none";

    const a = inputOptionTwo[0].value;
    const b = inputOptionTwo[1].value;
    const c = inputOptionTwo[2].value;
    console.log(a,b,c);

    if((a+b)>c, (b+c)>a, (c+a)>b){
      outputDiv[1].style.display = "block";
      let s = (Number(a) + Number(b) + Number(c))/2;
    areaShow[1].innerHTML = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    }
    else {
      error.style.display = "block";
      outputDiv[1].style.display = "none";
    }
  });

  document.forms[3].addEventListener('submit', (e) => {
    e.preventDefault();
    const b = inputOptionThree[0].value;
    const c = inputOptionThree[1].value;
    const A = inputOptionThree[2].value;

    areaShow[2].innerHTML = ((b*c*Math.sin(A*Math.PI/180))/2).toFixed(4);
});

