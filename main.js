'use strict';

const quizQuestions = [
    {
        question: 'What is Gatsby.js?',
        options: ['a framework', 'a PWA (progressive web app) generator', 'a blazing-fast static site generator for React','awesome + all of the above'],
        answer: 'awesome + all of the above',
    },
    {
        question: 'Gatsby.js uses the ___________ stack',
        options: ['JAM (JavaScript, API, Markdown)', 'MERN (MongoDB, Express.js, React.js, and Node.js)', 'Ruby on Rails', 'MEAN (MongoDB, Express.js, Angular.js, and Node.js)'],
        answer: 'JAM (JavaScript, API, Markdown)'
    },
    {
        question: 'What year was Gatsby.js released? (Version 1.0.0)',
        options: ['2010', '2017', '2011','2014'],
        answer: '2017'
    },
    {
        question: 'Gatsby.js uses what to load data from the server to a client?',
        options: ['Falcor','REST','GraphQL','all of the above'],
        answer: 'GraphQL'
    },
    {
        question: 'What makes Gatsby.js have a "faster time to interaction?',
        options: ['progressive image loading', 'responsive image loading', 'inline CSS', 'all of the above'],
        answer: 'all of the above'
    },
    {
        question: 'The equivalent to Gatsby.js for Ruby is...',
        options: ['WordPress', 'Drupal', 'Jekyll', 'Squarespace'],
        answer: 'Jekyll'
    },
    {
        question: 'Gatsby.js is for...',
        options: ['bloggers', 'PWA fans', 'React developers', 'EVERYONE!'],
        answer: 'EVERYONE!'
    }
]

let questionCount = 1;
let scoreCount = 0;

function getQuizReady() {
    renderScoreCounter();
    $('.js-main').empty();
    loadQuestion(questionCount);
}

function startQuiz() {
    //when 'start quiz' is clicked,
    //run another function to get first question
    $('.js-start-quiz').on('click', function () {
        event.preventDefault();
        handleAnswerSubmitted();
        getQuizReady();
    });
}

function renderScoreCounter() {
    if (questionCount === 1) {
        $('.js-header').find('p').remove();
    }
    $('.js-header').find('ul').remove();
    $('.js-header').append(`
        <ul>
            <li>Score: ${scoreCount}</li>
            <li>Question: ${questionCount}/7</li>
        </ul>`);
}

function generateQuestionElement(questionCount) {
    let questionArrNum = questionCount - 1;
    return `
        <fieldset role='radiogroup'>
            <legend>Question ${questionCount}: ${quizQuestions[questionArrNum].question}</legend>
            <label for='answer'>
                <input type="radio" value="${quizQuestions[questionArrNum].options[0]}" name='answer' required>
                <span>${quizQuestions[questionArrNum].options[0]}</span>
            </label>
            <label for='answer'>
                <input type="radio" value="${quizQuestions[questionArrNum].options[1]}" name='answer' required>
                <span>${quizQuestions[questionArrNum].options[1]}</span>
            </label>
            <label for='answer'>
                <input type="radio" value="${quizQuestions[questionArrNum].options[2]}" name='answer' required>
                <span>${quizQuestions[questionArrNum].options[2]}</span>
            </label>
            <label for='answer'>
                <input type="radio" value="${quizQuestions[questionArrNum].options[3]}" name='answer' required>
                <span>${quizQuestions[questionArrNum].options[3]}</span>
            </label>
            <button type="submit" class="js-submit-question">Submit</button>
        </fieldset>`;
}

function loadQuestion(questionCount) {
    $('.js-form').append(generateQuestionElement(questionCount));
}

function handleAnswerSubmitted() {
    $('.js-form').on('click', '.js-submit-question', function () {
        event.preventDefault();
        let selectedAnswer = $("input[name='answer']:checked").val();
        checkQuestionAnswer(selectedAnswer);
        renderScoreCounter();
    });
}

function checkQuestionAnswer(givenAnswer) {
    const questionArrNum = questionCount - 1;
    const correctAnswer = quizQuestions[questionArrNum].answer;
    if (givenAnswer === correctAnswer) {
        displayCorrectAnswer(true);
    } else {
        displayCorrectAnswer(false, correctAnswer);
    }
}

function displayCorrectAnswer(isCorrect, correctAnswer) {
    $('.js-form').empty();
    $('.js-main').empty();
    if(isCorrect) {
        $('.js-main').append('<div class="correct-answer"><h3>You\'re a genius! That was right! :)</h3></div>');
        scoreCount++;
    } else {
        $('.js-main').append(`<div class="correct-answer"><h3>Sorry, that was wrong :( The correct answer was '${correctAnswer}'</h3></div>`);
    }

    if(questionCount !== 7){
        $('.js-main').append('<button type="submit" class="js-next-question">Next question</button>');
    } else {
        showFinalResults();
    }
}
    
function nextQuestionClicked() {
    $('.js-main').on('click', '.js-next-question', function () {
        event.preventDefault();
        questionCount++;
        $('.js-main').empty();
        loadQuestion(questionCount);
    });
}

function showFinalResults() {
    let message = '';
    if (scoreCount === 7) {
        message = 'WOAH! You knew about Gatsby before this, didn\'t you? Nice work my friend :)';
    } else if (scoreCount >= 5) {
        message = 'Hey! You\'re pretty good! :)';
    } else if (scoreCount >= 3 && scoreCount < 5) {
        message = 'Decent score, I bet you could do better ;)';
    } else if (scoreCount <= 2) {
        message = 'Not bad champ! Try taking the quiz again and seeing how you do!';
    }
    $('.js-main').append(`
        <h2>You did it! You completed the quiz with a final score of ${scoreCount}</h2>
        <p>${message}</p>
        <button type='submit' class='js-reset-button'>Reset button</button>
    `)
    resetQuiz();
}

function resetQuiz() {
    $('.js-form').empty();
    $('.js-main').on('click', '.js-reset-button', function () {
        questionCount = 1;
        scoreCount = 0;
        event.preventDefault;
        getQuizReady();
    });
}

function init() {
    //call all functions on browser load.
    startQuiz();
    nextQuestionClicked();
}

$(init());
