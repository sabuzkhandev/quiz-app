const quizdata = [
    {
        question : "01. Which language run in a web browser?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"Javascript",
        correct: "d",
    },
    {
        question : "02. What does css stand for?",
        a:"Central Style Sheet",
        b:"Cascading Style Sheet",
        c:"Cascading Simple Sheets",
        d:"Cars SUVs",
        correct: "b",
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
        question : "04. Which year was Javascript Launched?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"None of Above",
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