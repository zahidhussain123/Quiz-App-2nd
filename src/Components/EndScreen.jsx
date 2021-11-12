import React, { useContext } from 'react'
import { quizContext } from '../Helpers/Context';
import { Questions } from '../Helpers/Questions';
import "../App.css";
const EndScreen = () => {
   const {score, setScore ,setOpen} = useContext(quizContext);

   const restart = () => {
       setScore(0);
       setOpen("menu");
   }
    return (
        <div className="screen">
            <h1>Finish Quiz</h1>
            <h3>{score} / {Questions.length}</h3>
            <button onClick={restart}>Restart Quiz</button>
        </div>
    )
}

export default EndScreen;
