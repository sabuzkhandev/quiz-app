const quizdata = [
    {
        question : "01. Designing of system take into considerations of?",
        a:"Hardware",
        b:"Operating system",
        c:"Communication system",
        d:"All of above",
        correct: "d",
    },
    {
        question : "02. What type of fault remains in the system for some period and then disappears?",
        a:"Transient",
        b:"Permanent",
        c:"Intermittent",
        d:"All of above",
        correct: "a",
    },
    {
        question : "03. What does HTML stand for?",
        a:"Hypertext Markup Language",
        b:"Hypertext Markdown Language",
        c:"HyperLoop Machine Language",
        d:"Helicopters Terminal Motorboat",
        correct: "a",
    },
    
    {
        question : "04. It is guaranteed that critical real time tasks will be completed within their deadlines?",
        a:"Soft",
        b:"Hard",
        c:"Critical",
        d:"All of above",
        correct: "b",
    },
    {
        question : "05. Fast response of real time processing is considered as its?",
        a:"Network",
        b:"Advantage",
        c:"Disadvantage",
        d:"Characteristic",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

    deselectAnswers()
    const currentQuizData = quizdata[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click',()=>{
    const answer = getSelected()

    if(answer){
        if(answer === quizdata[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < quizdata.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
                <h2>Your answered correctly at <br><strong style="color:green">${score}/${quizdata.length}</strong><br> Questions</h2>
                <button onclick="window.location = ('https://sabuzkhandev.github.io/quiz-app/')">Reload</button>
            `
        }
    }
})