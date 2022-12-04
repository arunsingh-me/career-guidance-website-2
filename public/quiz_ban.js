const quizDB =[
    {
        question:" I check my class work for mistakes:",
        a:"Once, or twice if I have time.",
        b:" I don’t; I usually have a good feeling about my work",
        c:" I don’t because I run out of time",
        ans:"ans1"
    },
    {
        question:"If you ask me to make up a scenario or expand on instructions:",
        a:"I don’t like it; I prefer to follow explicit directions.",
        b:" I’m limited, but I can try",
        c:"  I like being able to use information from others, but have input as well.",
        ans:"ans1"
    },
    {
        question:"eamwork involves communication, and to me:",
        a:" That’s great because I like to hear others talk about their ideas.",
        b:"That’s wasting time; I’d rather get right to work",
        c:" It’s a chance to find out more about my co-workers, their hobbies and interests.",
        ans:"ans3"
    },
    {
        question:"Regarding personal communication:",
        a:" I really enjoy talking.",
        b:"I speak if I have something to say and think how to say it first.",
        c:"I avoid starting conversations and prefer not to have to talk too much.",
        ans:"ans1"
    },
    {
        question:"If I have to speak in front of others, I:",
        a:" Would probably say as little as possible or pass out.",
        b:" Kick myself after I’m done because I didn’t say what I meant to say.",
        c:"Practice what I have to say first so I can speak coherently.",
        ans:"ans2"
    },
    {
        question:"What's the best way for you to learn about how something works (like a computer or a video game)?",
        a:" Get someone to show you",
        b:" Read about it or listen to someone explain it",
        c:"Figure it out on your own",
        ans:"ans3"
    },
    {
        question:"If you went to a school dance, what would you be most likely to remember the next day?",
        a:" The faces of the people who were there",
        b:" The music that was played",
        c:"The dance moves you did and the food you ate",
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
        <a href="banking.html"><button class="btn" style="color: #003333";>Go back to start menu</button></a>
        `;
        else{
            showScore.innerHTML=`
            <h2>You Scored ${score}/${quizDB.length}.You are good to go.</h2>
            <a href="banking.html"><button class="btn" style="color: #003333";>Go back to course</button></a>
            `;
        }
        showScore.classList.remove('scoreArea');
    }

});