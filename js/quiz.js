const startButton = document.getElementById('beginButton');
startButton.addEventListener('click', startGame);

const nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion()
}) ;


const questionContainerElement = document.getElementById('gameSpace');


const questionElement = document.getElementById('textArea');
const answerButtonsElement = document.getElementById('buttonArea');

//making things show randomly
let shuffledQuestions, currentQuestionIndex




function startGame () {
    console.log('started');
    //adds start button after it's clicked
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    //take of hide class on gameSpace
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}



function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

function showQuestion(question) {
    //set text area text
    questionElement.innerText = question.question
    //loop through answers
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('button', 'btn');
        //checks if anwser is correct
        if(answer.correct) {
            button.dataset.correct = answer.correct
        };
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);

    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    //convert to an array
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    //move to next question
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is 2 + 2',
        answers: [
            {text:'4', correct: true},
            {text: '22', correct: false}
        ]
    },
    {
        question: 'Who is Winner?',
        answers: [
            {text:'the best', correct: true},
            {text: '22', correct: false},
            {text: 'no', correct: false},
            {text: 'nobody', correct: false}
        ]
    },
    {
        question: 'Is K the best?',
        answers: [
            {text:'yes', correct: true},
            {text: 'no', correct: false},
            {text: 'of course', correct: true},
        ]
    }
]