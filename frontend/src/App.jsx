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
  const {phase, questionId, handleAnswer, startQuiz, shoeScore, setPhase} = useQuiz();


  // test to check shoeScore ratings
  useEffect(() => {
    console.log(shoeScore)
  }, [shoeScore]);
  


  if(phase === 'start') return (
    <div>
      <Header setPhase = {setPhase} />
      <Start startQuiz = {startQuiz} />

    </div>
  )
  if(phase === 'quiz') return (
    <div>
      <Header setPhase = {setPhase} />
      <Question key = {questionId} questionId = {questionId} handleAnswer = {handleAnswer}  />
    </div>
  )


  
  return (
    <div>
      <Header setPhase = {setPhase} />
      <Results startQuiz = {startQuiz} shoeScore = { shoeScore} />

      
    </div>
  )
}

export default App
