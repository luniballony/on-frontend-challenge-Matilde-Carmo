import './Style.css'
import Header from './components/Header'
import Question from './screens/Question'
import Start from './screens/Start'
import useQuiz from './hooks/useQuiz'

function App() {

  const {questionId} = useQuiz();

  
  return (
    <div>
      <Header />
      
      <Start />

      <Question key = {questionId} questionId = {questionId} />

      
    </div>
  )
}

export default App
