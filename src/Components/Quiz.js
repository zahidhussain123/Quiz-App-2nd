import { useContext, useState } from "react";
import { quizContext } from "../Helpers/Context";
import { Questions } from "../Helpers/Questions";
import "../App.css"
const Quiz = () => {
  const [quizMode, setQuizMode] = useState(0);
  const [optionChose, setOptionChose] = useState("");
  const { score, setScore ,setOpen } = useContext(quizContext);

  const nextQuestion = ()=>{
     if(Questions[quizMode].asnwer === optionChose){
         setScore(score + 1);
     }
     setQuizMode(quizMode + 1);
  }

  const finishQuiz =()=>{
    if(Questions[quizMode].asnwer === optionChose){
        setScore(score + 1);
    }
    setOpen("screen");
  }
  return (
    <div className="quiz">
      <h1>{Questions[quizMode].prompt}</h1>
      <div className="options">
        <button onClick={() => setOptionChose("A")}>
          {Questions[quizMode].optionA}
        </button>
        <button onClick={() => setOptionChose("B")}>
          {Questions[quizMode].optionB}
        </button>
        <button onClick={() => setOptionChose("C")}>
          {Questions[quizMode].optionC}
        </button>
        <button onClick={() => setOptionChose("D")}>
          {Questions[quizMode].optionD}
        </button>
      </div>

      {quizMode === Questions.length - 1 ? 
      <button onClick={finishQuiz}>Finish Quiz</button>
      :  (
        <button onClick={nextQuestion}>Next</button>
      )}
      
    </div>
  );
};

export default Quiz;
