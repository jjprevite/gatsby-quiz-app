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

function startQuizClicked() {
    //when 'start quiz' is clicked,
    //run another function to get first question
    $('.js-start-quiz').on('click', function () {
        event.preventDefault();
        console.log('Starting quiz...');
        $('.js-main').empty();
        loadQuestion(1);
        handleAnswerSubmitted();
    });
}

function generateQuestionElement(index) {
    let questionNum = index - 1;
    console.log('generating question...');
    return `
        <fieldset>
            <legend>Question ${questionNum+1}: ${quizQuestions[questionNum].question}</legend>
            <label>
                <input type="radio" value="${quizQuestions[questionNum].options[0]}" name="answer" required>
                <span>${quizQuestions[questionNum].options[0]}</span>
            </label>
            <label>
                <input type="radio" value="${quizQuestions[questionNum].options[1]}" name="answer" required>
                <span>${quizQuestions[questionNum].options[1]}</span>
            </label>
            <label>
                <input type="radio" value="${quizQuestions[questionNum].options[2]}" name="answer" required>
                <span>${quizQuestions[questionNum].options[2]}</span>
            </label>
            <label>
                <input type="radio" value="${quizQuestions[questionNum].options[3]}" name="answer" required>
                <span>${quizQuestions[questionNum].options[3]}</span>
            </label>
            <button type="submit" class="js-submit-question">Submit</button>
        </fieldset>`;
}

function loadQuestion(questionCount) {
    console.log('Loading question...');
    $('.js-form').append(generateQuestionElement(questionCount));
}

function handleAnswerSubmitted() {
    $('.js-form').on('click', '.js-submit-question', function () {
        event.preventDefault();
        console.log('question answer submitted..');
        let answer = $("input[name='answer']:checked").val();
        console.log(answer);
        checkQuestionAnswer(answer);
    });
    //3. check it based on questionCount
    //4. if it's right, display something
    //5. if it's wrong, display another thing
}

function checkQuestionAnswer(answer) {
    //V fix that so it's not hard coded...
    const questionArrNum = 0;
    if(answer == quizQuestions[questionArrNum].answer) {
        console.log('correct answer!');
    } else {
        console.log('wrong answer :(');
    }
}
    


function nextQuestionClicked() {
    // get next question
}


function init() {
    //call all functions on browser load.
    startQuizClicked();
    console.log(quizQuestions[0].options[3][1]);
}

$(init());