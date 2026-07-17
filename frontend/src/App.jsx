import './Style.css'
import Header from './components/Header'
import Loading from './screens/Loading'
import Question from './screens/Question'
import Results from './screens/Results'
import Start from './screens/Start'

function App() {

  return (
    <div>
      On Frontend Challenge
      <Header />
      <Start />
      <Question />
      <Results />
      <Loading />
    </div>
  )
}

export default App
