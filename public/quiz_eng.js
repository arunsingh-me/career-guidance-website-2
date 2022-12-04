const quizDB =[
    {
        question:"When trying to solve a problem, I",
        a:" Enjoy finding systematic ways of solving a problem.",
        b:"Keep trying various solutions until something works.",
        c:"Get frustrated.",
        ans:"ans1"
    },
    {
        question:"If I'm given written instructions:",
        a:" I'm able to figure them out and do the job on my own.",
        b:"I double check with someone to make sure I have the instructions right.I toss them and figure it out on my own.",
        c:" I toss them and figure it out on my own.",
        ans:"ans1"
    },
    {
        question:"In deciding how to solve a problem, I:",
        a:" Make decisions immediately and don’t let it slow me down.",
        b:"Make a decision after five or ten minutes, right or wrong.",
        c:"Look at all the angles and study the problem until I find a solution.",
        ans:"ans3"
    },
    {
        question:"To help make a decision, I:",
        a:" Ask other people and rely on their judgment.",
        b:"Study the problem, read and try to find answers.",
        c:"Use a combination of input from others and my own research.",
        ans:"ans1"
    },
    {
        question:"When it comes to details:",
        a:" The fewer the better",
        b:" I work quickly and check the details at the end.",
        c:"I enjoy looking at every angle and focusing on the details as I go.",
        ans:"ans2"
    },
    {
        question:"When you are not sure how to spell a word, what are you most likely to do?",
        a:" Write it down to see if it looks right",
        b:" Spell it out loud to see if it sounds right",
        c:"Trace the letters in the air (finger spelling)",
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
        question:" You're out shopping for clothes, and you're waiting in line to pay. What are you most likely to do while you are waiting?",
        a:" Look around at other clothes on the racks",
        b:"   Talk to the person next to you in line",
        c:"  Fidget or move back and forth",
        ans:"ans2"
    },
    {
        question:" When you see the word cat what do you do first?",
        a:" Picture a cat in your mind",
        b:"    Say the word cat to yourself",
        c:"  Think about being with a cat (petting it or hearing it purr)",
        ans:"ans1"
    },
    {
        question:" What's the best way for you to study for a test?",
        a:"  Read the book or your notes and review pictures or charts",
        b:"    Have someone ask you questions that you can answer out loud",
        c:"   Make up index cards that you can review",
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
        <a href="engineering.html"><button class="btn" style="color: #003333";>Go back to start menu</button></a>
        `;
        else{
            showScore.innerHTML=`
            <h2>You Scored ${score}/${quizDB.length}.<br>You are good to go.</h2>
            <a href="engineering.html"><button class="btn" style="color: #003333";>Go back to course</button></a>
            `;
        }
        showScore.classList.remove('scoreArea');
    }

});