const quizDB =[
    {
        question:" When in a new place, how do you find your way around?",
        a:"Look for a map or directory that shows you where everything is",
        b:"Ask someone for directions",
        c:"Just start walking around until you find what you're looking for",
        ans:"ans1"
    },
    {
        question:"Of these three classes, which is your favorite?",
        a:" Art class",
        b:"Music class",
        c:" Gym class",
        ans:"ans1"
    },
    {
        question:"When you hear a song on the radio, what are you most likely to do?",
        a:" Picture the video that goes along with it",
        b:"Sing or hum along with the music",
        c:" Start dancing or tapping your foot",
        ans:"ans3"
    },
    {
        question:"What do you find most distracting when in class?",
        a:" Lights that are too bright or too dim",
        b:"oises from the hallway or outside the building (like traffic or someone cutting the grass)",
        c:"The temperature being too hot or too cold",
        ans:"ans1"
    },
    {
        question:"What do you like to do to relax?",
        a:" Read",
        b:" :Listen to music",
        c:"Exercise (walk, run, play sports, etc.)",
        ans:"ans2"
    },
    {
        question:"I check my class work for mistakes:",
        a:" Once, or twice if I have time.",
        b:"  I don’t; I usually have a good feeling about my work.",
        c:"I don’t because I run out of time.",
        ans:"ans3"
    },
    {
        question:"What kind of book would you like to read for fun?",
        a:" A book with lots of pictures in it",
        b:"  A book with lots of words in it",
        c:" A book with word searches or crossword puzzles",
        ans:"ans2"
    },
    {
        question:" If you ask me to make up a scenario or expand on instructions:",
        a:"I don’t like it; I prefer to follow explicit directions.",
        b:"   I’m limited, but I can try.",
        c:"  I like being able to use information from others, but have input as well.",
        ans:"ans2"
    },
    {
        question:" Teamwork involves communication, and to me:",
        a:" That’s great because I like to hear others talk about their ideas.",
        b:"   That’s wasting time; I’d rather get right to work.",
        c:"  It’s a chance to find out more about my co-workers, their hobbies and interests.",
        ans:"ans1"
    },
    {
        question:"  Regarding personal communication:",
        a:"   I really enjoy talking.",
        b:"    I speak if I have something to say and think how to say it first.",
        c:"   I avoid starting conversations and prefer not to have to talk too much.",
        ans:"ans3"
    }
];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const submit=document.querySelector('#submit');
 const answers=document.querySelectorAll('.answer');
 const showScore=document.querySelector('#showscore');

let questioncount=0;
let score=0;
const loadQuestion = () => {
    const questionList= quizDB[questioncount];
    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
}
loadQuestion();
const getCheckAnswer = () => {
    let answer;
    for(let i=0;i<3;i++){
        if(answers[i].checked) 
        {
            answer=answers[i].id;
        }
    };
    return answer;
}
const deselectAll = ()=>{
    answers.forEach((currAnsElem)=>currAnsElem.checked=false);
}
submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer===quizDB[questioncount].ans){
        score++;
    };
    questioncount++;
    deselectAll();
    if(questioncount<quizDB.length)
    {
        loadQuestion();
    }
    else{
        if(score<6)
        showScore.innerHTML=`
        <h2>You Scored ${score}/${quizDB.length}.<br>You should look for another career.</h2>
        <a href="law.html"><button class="btn" style="color: #003333";>Go back to start menu</button></a>
        `;
        else{
            showScore.innerHTML=`
            <h2>You Scored ${score}/${quizDB.length}.You are good to go.</h2>
            <a href="law.html"><button class="btn" style="color: #003333";>Go back to course</button></a>
            `;
        }
        showScore.classList.remove('scoreArea');
    }

});