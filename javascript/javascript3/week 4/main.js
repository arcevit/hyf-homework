
let questionbox=document.querySelector('.question-box')
var confettiSettings = { target: 'confeti' };
var confetti = new ConfettiGenerator(confettiSettings);





class Quiz{
    constructor(name){
        this.name=name;
    }
    fetchQuizQuestions(){
        
        return fetch('https://gist.githubusercontent.com/benna100/c9c38faebea1526fb4e6b6b896a1dc94/raw/9468c385bfb422620676b3669509b0a59b326c42/quiz-questions.json')
        .then(response=>response.json())
        
    }
    renderQuestions(questions){
    //render questions
         for (let i = 0; i < questions.length; i++) {
            let questioncontainer=document.createElement('div');
            questioncontainer.className="quest-container";
            questionbox.appendChild(questioncontainer)  

            questioncontainer.innerHTML=`
            <li>
            <span>${questions[i].title}</span>
            <p>Difficulty :${questions[i].difficulty}</p>
            <p>${questions[i].content}</p>
    
    
            <select name="slc" class="question-option">
            <option  value="${questions[i].options[0].correct}">${questions[i].options[0].content}</option>
            <option    value="${questions[i].options[1].correct}">${questions[i].options[1].content}</option>
            </select>    
            </li>
    
            `;
             }  

//renders result 
            let questioncontainer=document.createElement('div');
            questioncontainer.className="nex-question";
            questionbox.appendChild(questioncontainer) 
        
            //  console.log(correctanswer)
                questioncontainer.innerHTML=`
            <li>
            <h2 id="quizfinish"></h2> 
            <h3 id="congratulate" style="color:red"></h3>  
            <h3 id="resultoftest"></h3>
            <h3 id="correct" style="font-size:18px"></h3>
            
            </li>  
           
            `;

        
}

     getScore(){
         //getting option value of the select Tag for each question
        let eachquestion=document.getElementsByClassName('question-option')
        let eachquestionselect=Array.from(eachquestion)
        console.log(eachquestionselect)
        let correctanswer=[];
      eachquestionselect.forEach(option=>{ 
       let answer=option.options[option.selectedIndex].value
       console.log("selected option answer : ,",answer)
          
       if (answer==='true'){
           correctanswer.push("true")
           
       }
       
    } )
    if(correctanswer.length>0)
    //to render result at the end of the test so that value of question result rendered in pass condition
    // and fail condition with else the following statements
    // i coudnt find to how to pass value one method to another  for the same Class
    //so that it may render in render function instead of here
    {
        const resultOfTest=document.getElementById('resultoftest');
        const congratulate=document.getElementById('congratulate');
        const correct=document.getElementById('correct');
  
        resultOfTest.innerHTML="You have scored "+correctanswer.length *50+" points"
        congratulate.innerHTML="CONGRATULATIONS"
        correct.innerHTML="You have given "+correctanswer.length +" correct answer out of "+ eachquestionselect.length +" questions"


        confetti.render();


    }
    else{
        confetti.clear();
        const lose=document.getElementById('lose');
        const resultOfTest=document.getElementById('resultoftest');

        resultOfTest.innerHTML="You have not scored any point"
        congratulate.innerHTML="You should re-attend the quiz"
        lose.src ="https://media.tenor.com/images/e7c4997469bfafe21084f08183fe50ca/tenor.gif";
        lose.style.opacity='1';
        lose.style.transform='scale(1)'
       

    }
    console.log(correctanswer.length)
    setTimeout(()=>{
        confetti.clear();
    
    },8000)

    }
    
    //get score bitis
    

}




const quiz=new Quiz("quiz1")


quiz.fetchQuizQuestions()
    .then(questions => { 
         quiz.renderQuestions(questions)

    })
 
 
 

    const ansBtn=document.getElementById('next-question');
    ansBtn.addEventListener("click",next)

    var n=0;
    function next(){
      
        if(n>1){     
          
           
            quiz.getScore()
             return;
             } 
             
             questionbox.children[n].style.opacity='0';
             questionbox.children[n+1].style.transform="scale(1)";
             questionbox.children[n+1].style.opacity="1";
             
             if(n>0){
                const quizFinisUI=document.getElementById('quizfinish')
                quizFinisUI.innerHTML="Quiz Finish"
                ansBtn.innerHTML="Score";  
             }
             n++;   
        }  


 