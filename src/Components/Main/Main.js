import React, { useState } from 'react';
import './Main.scss'
import AnimateOnChange from 'react-animate-on-change'
const Main = () => {


    var questions = [
        {question:"Do you have Cough?",point:1},
        {question:"Do you have Colds?",point:1},
        {question:"Do you have Diarrhea?",point:1},
        {question:"Do you have sore throat?",point:1},
        {question:"Are you experiencing MYALGIA or Body Aches?",point:1},
        {question:"Do you have a headache?",point:1},
        {question:"Do you have a fever (100℉ and above)?",point:1},
        {question:"Are you having difficulty breathing?",point:2},
        {question:"Are you experiencing Fatigue?",point:2},
        {question:"Have you traveled recently during past 14 days?",point:3},
        {question:"Do you have a travel history to a COVID-19 INFECTED AREA?",point:3},
        {question:"Do you have direct contact or is taking care of a positive COVID-19 PATIENT?",point:3},
    ];

    var max = questions.length;

    var [currentQuestion,setcurrentQuestion] = useState(0)
    var [points,setPoints] = useState(0)

    const onAnswer = (button)=>{
        if(button==2){
            setPoints(points+questions[currentQuestion]['point']);
        }
        setcurrentQuestion(currentQuestion+1);
    }

    const getResult = (point)=>{
        if(point<=2){
            return "Maybe stress related and observe.";
        }else if(point>=3 && point<=5){
            
            return "Hydrate properly and proper personal hygiene. <br/> Observe and Re-eveluate after 2 days";
        }
        else if(point>=6 && point<=12){
            
            return "Seek a consultation with Doctor";
        }
        else if(point>=13 && point<=24){
            
            return "Contact govt. officials,<br/>Call at Ministry of Healty,Govt. of India's 24x7 control room number <a href=\"tel:+91-11-2397 8046\">+91-11-2397 8046</a> ";
        }
    }

    return (
        <div id="Main">
            {currentQuestion<max?<div>
                <p className="question"><Score diff={questions[currentQuestion]['point']} question={questions[currentQuestion]}></Score></p>
                <div className="options">
                    <button onClick={()=>{onAnswer(1)}} className="no">NO</button>
                    <button onClick={()=>{onAnswer(2)}} className="yes">YES</button>
                    
                </div>
            </div>:<div>
                    <p className="result" dangerouslySetInnerHTML={{ __html: getResult(points) }}></p>
                </div>}
        </div>
    );
}

const Score = (props) =>
    
  <AnimateOnChange
    baseClassName="question"
    animationClassName="hide"
    animate={props.diff !=0}>
      {props.question['question']}
  </AnimateOnChange>
 
export default Main;