import './Style.css'
import Header from './components/Header'
import Question from './screens/Question'
import Start from './screens/Start'
import useQuiz from './hooks/useQuiz'
import Results from './screens/Results'

function App() {

  const {phase, questionId, handleAnswer} = useQuiz();


  if(phase === 'start') return <Start />
  if(phase === 'quiz') return (
    <Question key = {questionId} questionId = {questionId} handleAnswer = {handleAnswer}  />
  )

  
  return (
    <div>
      <Header />
      
      <Start />

      <Results />

      
    </div>
  )
}

export default App
