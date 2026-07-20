import './Style.scss'
import Header from './components/Header'
import Question from './screens/Question'
import Start from './screens/Start'
import useQuiz from './hooks/useQuiz'
import Results from './screens/Results'
import { useEffect } from "react";


function App() {

  const {phase, questionId, handleAnswer, startQuiz, shoeScore} = useQuiz();


  // test to check shoeScore ratings
  useEffect(() => {
    console.log(shoeScore)
  }, [shoeScore]);
  


  if(phase === 'start') return (
    <Start startQuiz = {startQuiz} />)
  if(phase === 'quiz') return (
    <Question key = {questionId} questionId = {questionId} handleAnswer = {handleAnswer}  />
  )


  
  return (
    <div>
      <Header />
      <Results startQuiz = {startQuiz} shoeScore = { shoeScore} />

      
    </div>
  )
}

export default App
