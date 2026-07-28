import './Style.scss'
import useQuiz from './hooks/useQuiz'
import Header from './components/Header'
import AppRouter from './router/AppRouter'


function App() {

  // by calling the hook here, we make its state global
  const {phase, questionId, handleAnswer, startQuiz, shoeScore} = useQuiz();
 

  return (
    <div className="app">
      <Header
        startQuiz={startQuiz}
      />
      <AppRouter 
        phase = {phase}
        questionId = {questionId}
        handleAnswer = {handleAnswer}
        startQuiz = {startQuiz}
        shoeScore = {shoeScore}
      />
    </div>
  );
}

export default App
