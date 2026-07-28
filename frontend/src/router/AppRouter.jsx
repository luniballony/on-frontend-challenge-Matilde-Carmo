import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Start from '../screens/Start'
import NotFound from '../screens/NotFound';
import Question from "../screens/Question";
import Results from '../screens/Results';
import useQuiz from "../hooks/useQuiz";

function AppRouter () {

    const {questionId, handleAnswer, startQuiz, shoeScore} = useQuiz();
 
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Start startQuiz={startQuiz} className="content" />} />
                <Route path="/quiz" element={<Question questionId={questionId} handleAnswer={handleAnswer} />} />
                <Route path="/results" element={<Results startQuiz={startQuiz} shoeScore={shoeScore} className="content" />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )

}

export default AppRouter