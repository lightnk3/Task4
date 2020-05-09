	
	const options=document.querySelector(".options").children;
	const answerTrackerContainer=document.querySelector(".answers-tracker");
	const questionNumberSpan=document.querySelector(".question-num-value");
	const totalQuestionSpan=document.querySelector(".total-question");
	const correctAnswerSpan=document.querySelector(".correct-answers");
	const totalQuestionSpan2=document.querySelector(".total-question2");
	const percentage=document.querySelector(".percentage")
	const question=document.querySelector(".question");
	const op1=document.querySelector(".option1");
	const op2=document.querySelector(".option2");
	const op3=document.querySelector(".option3");
	const op4=document.querySelector(".option4");
	let questionIndex;
	let index=0;
	let myArray=[];
	let myArr=[];
	let score=0;
	

	const questions=[
  	{
   	q:'The Shortcut key for SAVE is?',
   	options:['ctrl + S','alt + S','shift + S','ctrl + X'],
   	answer:0
  	},
  	{
 	q:'One of these is NOT a web programming Language?',
 	options:['Javascript','C#','Microsoft Word','Python'],
 	answer:2
	},
	{
 	q:'Select input device out of these?',
 	options:['Monitor','Printer','Laptop','Mouse'],
 	answer:3
	},
	{
 	q:'Computer is an electronic?',
 	options:['Computer','Device','Keyboard','Laptop'],
 	answer:1
    },
	{
 	q:'Computer accepts instruction from the user through?',
 	options:['Output Devices','Input Devices','Printing Devices','Softwares'],
 	answer:1
	}
   ]


   totalQuestionSpan.innerHTML=questions.length;
   function load(){
   		  questionNumberSpan.innerHTML=index+1;
   		  question.innerHTML=questions[questionIndex].q;
   		  op1.innerHTML=questions[questionIndex].options[0];
   		  op2.innerHTML=questions[questionIndex].options[1];
   		  op3.innerHTML=questions[questionIndex].options[2];
   		  op4.innerHTML=questions[questionIndex].options[3];
   		  index++;

   }

   function check(element){
   	if(element.id==questions[questionIndex].answer){
   		element.classList.add("correct")
   		updateAnswersTracker("correct")
   		score++;
   		console.log("score:"+score)
   	}
   	else{
   		element.classList.add("wrong")
   		updateAnswersTracker("wrong")
   	}
   	disabledOptions()

   } 

   function	disabledOptions(){
   	 for (let i=0; i<options.length; i++) {
		 options[i].classList.add("disabled");
		 if(options[i].id==questions[questionIndex].answer){
			options[i].classList.add("correct");
		}
	 }

  } 

  function enableOptions(){
  	for (let i=0; i<options.length; i++){
  		options[i].classList.remove("disabled","correct","wrong");

  	}

  }

  function validate(){
	if(!options[0].classList.contains("disabled")){
	  alert("Please select one option")
	}
	else{
		randomQuestion();
		enableOptions();
	}
}

  function next(){
	validate();
  }

  function randomQuestion(){
  	let randomNumber=Math.floor(Math.random()*questions.length);
  	let hitDuplicate=0;
  	if(index==questions.length){
  		quizOver();
  	}
  	else{
  		if(myArray.length>0){
  			for(let i=0; i<myArray.length; i++){
  			  if(myArray[i]==randomNumber){
			 	hitDuplicate=1
			 	break;
			  }
  			}
  			if(hitDuplicate==1){
  			  randomQuestion();
  			}
  			else{
  				questionIndex=randomNumber;
  		  		load();
  		  		myArr.push(questionIndex);
  			 }
  		  }
  		if(myArray.length==0){
  		  questionIndex=randomNumber;
  		  load();
  		  myArr.push(questionIndex);	
  		}

  	  myArray.push(randomNumber);
  		
  	   }
 }

function answerTracker(){
	for(let i=0; i<questions.length; i++){
		const div=document.createElement("div")
		answerTrackerContainer.appendChild(div);
	 }
  }
  function updateAnswersTracker(classNam){
	answerTrackerContainer.children[index-1].classList.add(classNam);
  }

  function quizOver(){
  	document.querySelector(".quiz-over").classList.add("show");
  	correctAnswerSpan.innerHTML=score;
  	totalQuestionSpan2.innerHTML=questions.length;
  	percentage.innerHTML=(score/questions.length)*100 + "%";

  }

  function tryAgain(){
	  window.location.reload();
  }

 window.onload=function(){
 	randomQuestion();
 	answerTracker();	
 }




