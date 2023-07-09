const quizData = [{
    question: "Which attribute is used to set the path for an image element?",
    a: "val",
    b: "source",
    c: "src",
    d: "Jalt",
    correct: "c",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What does the <br> tag add to your webpage?",
    a: "Long break",
    b: "Paragraph break",
    c: "Line break",
    d: "None of the above",
    correct: "c",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
let timerInterval;
  let timerSeconds = 4 * 60; // 4 minutes
  
  const startTimer = () => {
    timerInterval = setInterval(updateTimer, 1000);
  };
  
  const updateTimer = () => {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    const displayMinutes = formatTime(minutes);
    const displaySeconds = formatTime(seconds);
    document.getElementById("timer").textContent = `${displayMinutes}:${displaySeconds}`;
  
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      handleQuizTimeout();
    } else {
      timerSeconds--;
    }
  };
  
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
startTimer();
loadQuestion(index); 
