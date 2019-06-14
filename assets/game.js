var theQuestions = [
    {
        question: "Who invented the Telephone?",

        answers: {

            a: 'Bell',

            b: 'Tesla',

            c: 'Gates',
        },

        correctAnswer: "a"
    },
    {
        question: "What did the crocodile swallow in Peter Pan?",

        answers: {
            a: 'Hook',

            b: 'Alarm Clock',

            c: 'Mary',
        },
        correctAnswer: "b"
    },
    {
        question: "When did the First World War start?",

        answers: {
            a: '1910',

            b: '1922',

            c: '1914',
        },
        correctAnswer: "c"

    },
    {
        question: "What was the first full length CGI movie?",

        answers: {
            a: 'Tron',

            b: 'A Bugs Life',

            c: 'Toy Story',
        },
        correctAnswer: 'c'
    },
    {
        question: "What does the F stand for in FBI?",
        answers: {
            a: 'Federal',

            b: 'Fun',

            c: 'Federation',
        },
        correctAnswer: 'a'
    },
    {
        question: "Who directed the epic historical drama Schindler's List in 1993?",
        answers: {

            a: 'Martin Scorsese',

            b: 'Steven Spielberg',

            c: 'Christopher Nolan',


        },
        correctAnswer: 'b'

    },
    {
        question: "Which TV character said, “Live long and prosper”?",
        answers: {
            a: 'Kirk',
            
            b: 'Spock',
            
            c: 'Scotty',
        },
        correctAnswer: 'b'
    }
    
    
];

let quizContainer2 = document.getElementById('quiz');
let resultsContainer2 = document.getElementById('results');
let submitButton2 = document.getElementById('submit');

generateQuiz(theQuestions, quizContainer2, resultsContainer2, submitButton2);

//var countdown = function(seconds){
    // var timer = setInterval(funtion(){
        
        //seconds = seconds - 1;
        /// }
        
        
        //}
        
        
        


function showQuestions(questions, quizContainer) {
    let output = [];
    let answers;

    for (var i = 0; i < questions.length; i++) {
        answers = [];

        for (letter in questions[i].answers) {

            answers.push(
                '<label>'
                + '<input type="radio" name="question"+i+"', value = "'+letter+'" >
                + letter + ': '
                + questions[i].answers[letter]
                + '</label>'
            );
        }

        output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
    }
    quizContainer.innerHTML = output.join('');

    showQuestions(questions, quizContainer);
}

function showResults(questions, quizContainer, resultsContainer) {


    var answerContainers = quizContainer.querySelectorAll('.answers');


    var userAnswer = '';
    var numCorrect = 0;


    for (var i = 0; i < questions.length; i++) {


        userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;


        if (userAnswer === questions[i].correctAnswer) {

            numCorrect++;


            answerContainers[i].style.color = 'green';
        }

        else {

            answerContainers[i].style.color = 'red';
        }
    }


    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;



}

function generateQuiz()
{
    let quiz_html = "<ol>";
    theQuestions.forEach(question => {
        quiz_html += "<li>" + question.question + "</li>";
    });
    quiz_html += "</ol>";
    
    let quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML += quiz_html;
}

generateQuiz();