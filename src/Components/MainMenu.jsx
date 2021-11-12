import React, { useContext } from 'react'
import { quizContext } from '../Helpers/Context';
import "../App.css";
const MainMenu = () => {
  const {open , setOpen} =  useContext(quizContext);
    return (
        <div className="mainMenu">
            <button onClick={()=>setOpen("quiz")}>Start Quiz</button>
        </div>
    )
}

export default MainMenu;
