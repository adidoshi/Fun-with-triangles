const quizForm = document.querySelector(".formQuiz");
const questionDiv = document.querySelectorAll(".point");
const scoreShow = document.querySelector(".score");
const submit = document.querySelector("#subQuiz")

quizForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const answersArr = ["option2", "option3", "option1", "option1", "option2", "option2", "option2", "option1", "option4", "option2"];
    let score = 0;

    const data = new FormData(quizForm);
    let index = 0;
    for (elem of data.values()){
        if(elem === answersArr[index]){
            questionDiv[index].style.backgroundColor = "green";
            score++;
        }
        else {
            questionDiv[index].style.backgroundColor = "red";
        }
        index++;
    }
    scoreShow.innerText = score;
    submit.style.display = "none";
})