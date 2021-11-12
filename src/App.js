import { useState } from "react";
import "./App.css";
import EndScreen from "./Components/EndScreen";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import { quizContext } from "./Helpers/Context";

function App() {
  const [open, setOpen] = useState("menu");
  const [score, setScore] = useState("")
  return (
    <div className="app">
      <h1>Quiz App</h1>
      <quizContext.Provider value={{open , setOpen, score, setScore}}>
      {open === "menu" && <MainMenu />}
      {open === "screen" && <EndScreen />}
      {open === "quiz" && <Quiz />}
      </quizContext.Provider>
    </div>
  );
}

export default App;
