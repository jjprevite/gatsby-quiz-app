'use strict';

const quizQuestions = [
    {
        question: 'What is Gatsby.js?',
        options: [
            ['a framework', false],
            ['a PWA (progressive web app) generator', false ],
            ['a blazing-fast static site generator for React', false],
            ['awesome + all of the above', true]
        ]
    },
    {
        question: 'Gatsby.js uses the ___________ stack',
        options: [
            ['JAM (JavaScript, API, Markdown)', true],
            ['MERN (MongoDB, Express.js, React.js, and Node.js)', false],
            ['Ruby on Rails', false],
            ['MEAN (MongoDB, Express.js, Angular.js, and Node.js)', false]
        ]
    },
    {
        question: 'What year was Gatsby.js released? (Version 1.0.0)',
        options: [
            ['2010', false],
            ['2017', true],
            ['2011', false],
            ['2014', false]
        ]
    },
    {
        question: 'Gatsby.js uses what to load data from the server to a client?',
        options: [
            ['Falcor', false],
            ['REST', false],
            ['GraphQL', true],
            ['all of the above', false]
        ]
    },
    {
        question: 'What makes Gatsby.js have a "faster time to interaction?',
        options: [
            ['progressive image loading', false],
            ['responsive image loading', false],
            ['inline CSS', false],
            ['all of the above', true]
        ]
    },
    {
        question: 'The equivalent to Gatsby.js for Ruby is...',
        options: [
            ['WordPress', false],
            ['Drupal', false],
            ['Jekyll', true],
            ['Squarespace', false]
        ]
    },
    {
        question: 'Gatsby.js is for...',
        options: [
            ['bloggers', false],
            ['PWA fans', false],
            ['React developers', false],
            ['EVERYONE!', true]
        ]
    }
]

function startQuizClicked() {
    //when 'start quiz' is clicked,
    //run another function to get first question
    $('.js-start-quiz').on('click', function () {
        event.preventDefault();
        console.log('Starting quiz...');
    });
}

function createQuestion(index) {
    //generate the html for the question
}

function handleAnswerSubmitted() {
    //check answer using index...
    //if it's right, display one thing
    //if it's wrong, display another thing
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