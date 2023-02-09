let questions = [

    {
        "question": "Welcher Muskel ist am größten?",
        'answer_1': "Bizeps",
        'answer_2': "Trizeps",
        'answer_3': "Latissimus",
        'answer_4': "Glutaeus Maximus",
        'right_answer': 4
    },
    {
        "question": "Was genau ist der Muskelkater und wie entsteht er?",
        'answer_1': "Entseht durch überbeanspruchung des Ziel Muskels, es sind kleine Muskelfaser Risse",
        'answer_2': "Entsteht durch viel Schwitzen, ist eine verletzung des Muskels",
        'answer_3': "Ist die überdehnung eines Muskels, ensteht durch überbeanspruchung des Muskels",
        'answer_4': "Entseht durch zu schweres Training, ist ein indikator dafür das der Muskel sich regeneriert",
        'right_answer': 1
    },
    {
        "question": "Wie lang sollte eine Krafttrainingseinheit gehen?",
        'answer_1': "20 min",
        'answer_2': "45 min",
        'answer_3': "90 min",
        'answer_4': "Sehr Individuell, starre werte kann man nicht angeben",
        'right_answer': 4
    },
    {
        "question": "Welche Wiederholungszahl ist für den Kraftaufbau optimal?",
        'answer_1': "18-20",
        'answer_2': "10-12",
        'answer_3': "4-6",
        'answer_4': "8-10",
        'right_answer': 3
    },
    {
        "question": "Welche vond en folgenden Übungen ist eine Grundübung?",
        'answer_1': "Dips",
        'answer_2': "Bizeps-Curls",
        'answer_3': "Latziehen",
        'answer_4': "Bankdrücken",
        'right_answer': 4
    },
    {
        "question": "Welche Berechnung ist Korrekt?",
        'answer_1': "Grundumsatz - 500Kcal = 0.5 Kg wwöchentlicher Gewichtsverlust ",
        'answer_2': "Grundumsatz + 300Kcal = 0.5 Kg wwöchentliche Gewichtszunahme",
        'answer_3': "Grundumsatz + 300Kcal = Keine Gewichtszunahme oder abnahme",
        'answer_4': "7000 kcal entsprechen 2Kg Körperfett",
        'right_answer': 1
    },
    {
        "question": "Wie heißt der siebendfache und einflussreichste Mr.Olympia Sieger ?",
        'answer_1': "Lou Ferrigno",
        'answer_2': "Phil Heath",
        'answer_3': "Jay Cutler",
        'answer_4': "Arnold Schwrzennegger",
        'right_answer': 4
    }
];
let currentQuestion = 0;
let rightAnswsers = 0;
let AUDIO_SUCCESS = new Audio('Quizapp/audio/success.mp3');
let AUDIO_FAIL = new Audio('Quizapp/audio/fail.mp3');

function init() {
    document.getElementById('all-question').innerHTML = questions.length;
    showQuestion();
}
function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateNextQuestion();//loads next question
        updateProgressbar();
    }
}

function gameIsOver(){
    return currentQuestion >= questions.length;
}

function showAnswers(selectedAnswer) {
    let question = questions[currentQuestion];
    let selectedQuestionsNum = selectedAnswer.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected (selectedQuestionsNum, question)) {
        document.getElementById(selectedAnswer).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightAnswsers++;
    } else {
        document.getElementById(selectedAnswer).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-btn').disabled = false;
}
function rightAnswerSelected(selectedQuestionsNum, question){
    return selectedQuestionsNum == question['right_answer'];
}
function showEndScreen() {
    document.getElementById('question-content').innerHTML = completeQuiz();
    document.getElementById('next-btn').classList.add('d-none');
    document.getElementById('answers-amount').innerHTML = questions.length;
    document.getElementById('right-answers').innerHTML = rightAnswsers;
}
function updateProgressbar(){
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100)
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
}
function updateNextQuestion() {
    let question = questions[currentQuestion]
    document.getElementById('current-question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('question-number').innerHTML = `${currentQuestion + 1}`;
}

function nextQuestion() {
    currentQuestion++// jedesmal beim klicken des Buttons erhöht sich currenQuestion um +1;
    document.getElementById('next-btn').disabled = true;
    resetButtonsColor();
    showQuestion();
}

function resetButtonsColor() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function completeQuiz() {
    return/*html*/`
    <div class="complete-design">
        <div>
            <img src="Quizapp/brain result.png" alt="">
        </div>
        <div>
            <img src="Quizapp/trophy.png" alt="">
        </div>
    </div>
        <div class="completed"><b>COMPLETE BODYBUILDUNG QUIZ !</b></div>   
        <div class="answer-result" style="font-size: 24px;"> <b style="color:green;">RESULT</b> : <b style="color:green;" id="right-answers"></b> / <b id="answers-amount"></b> Fragen richtig beantwortet !</div>
        
        <a href="index1.html" class="btn btn-primary">Try again!</a>
    
    `;
}