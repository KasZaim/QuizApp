let questions = [
    
    {   
        "question" : "Welcher Muskel ist am größten?",
        'answer_1':"Bizeps",
        'answer_2':"Trizeps",
        'answer_3':"Latissimus",
        'answer_4':"Glutaeus Maximus",
        'right_answer': 4
    },
    {   
        "question" : "Was genau ist der Muskelkater und wie entsteht er?",
        'answer_1':"Entseht durch überbeanspruchung des Ziel Muskels, sind kleine Muskelfaser risse",
        'answer_2':"Entsteht durch viel Schwitzen, ist eine verletzung des Muskels",
        'answer_3':"Ist die überdehnung eines Muskels, ensteht durch überbeanspruchung des Muskels",
        'answer_4':"Entseht durch zu schweres Training, ist ein indikator dafür das der Muskel sich regeneriert",
        'right_answer': 1
    },
    {   
        "question" : "Wie lang sollte eine Krafttrainingseinheit gehen?",
        'answer_1':"20 min",
        'answer_2':"45 min",
        'answer_3':"90 min",
        'answer_4':"Ist Individuell, man kann keine starre werte angeben",
        'right_answer': 4
    },
    {   
        "question" : "Welche Wiederholungszahl ist für den Kraftaufbau optimal?",
        'answer_1':"18-20",
        'answer_2':"10-12",
        'answer_3':"4-6",
        'answer_4':"8-10",
        'right_answer': 3
    },
    {   
        "question" : "Welcher Makronährstoff ist für den Muskelaufbau essentiell?",
        'answer_1':"Fette",
        'answer_1':"Proteine",
        'answer_1':"Kohlenhydrate",
        'answer_1':"Ballaststoffe",
        'right_answer': 2
    },
];
let qurrentQuestion = 0;

function init(){
    document.getElementById('all-question').innerHTML = questions.length;
    showquestion();
}
function showquestion(){
    let question = questions[qurrentQuestion]
    document.getElementById('current-question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML=question['answer_1'];
    document.getElementById('answer_2').innerHTML=question['answer_2'];
    document.getElementById('answer_3').innerHTML=question['answer_3'];
    document.getElementById('answer_4').innerHTML=question['answer_4'];
}
function showAnswers(selectedAnswer){
    let question = questions[qurrentQuestion];
    let selectedQuestionsNum = selectedAnswer.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionsNum == question['right_answer']) {
        document.getElementById(selectedAnswer).parentNode.classList.add('bg-success');
    }else{
        document.getElementById(selectedAnswer).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-btn').disabled =false;
}

function nextQuestion(){
    
}