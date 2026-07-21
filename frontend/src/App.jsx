import './Style.scss'
import Header from './components/Header'
import Loading from './screens/Loading'
import Question from './screens/Question'
import Start from './screens/Start'
import useQuiz from './hooks/useQuiz'
import Results from './screens/Results'
import { useEffect } from "react";


function App() {

  // by calling the hook here, we make its state global
  const {phase, setPhase, questionId, handleAnswer, startQuiz, shoeScore, isLoading} = useQuiz();

  // test to check shoeScore ratings
  useEffect(() => {
    console.log(shoeScore)
  }, [shoeScore]);
  
 
  let screen;

  if (isLoading) {
    screen = <Loading />;

  } else if (phase === "start") {
    screen = <Start startQuiz={startQuiz} />;

  } else if (phase === "quiz") {
    screen = (
      <Question
        key={questionId}
        questionId={questionId}
        handleAnswer={handleAnswer}
      />
    );

  } else {
    screen = (
      <Results
        startQuiz={startQuiz}
        shoeScore={shoeScore}
      />
    );
  }

  return (
    <div className="app">
      <Header
        setPhase={setPhase}
        startQuiz={startQuiz}
      />
      {screen}
    </div>
  );
}

export default App
