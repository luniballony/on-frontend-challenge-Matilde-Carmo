import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import Start from '../screens/Start'
import NotFound from '../screens/NotFound';
import Question from "../screens/Question";
import Results from '../screens/Results';
import useQuiz from "../hooks/useQuiz";
import { useEffect } from 'react';

function AppRouter () {

    const {phase, questionId, handleAnswer, startQuiz, shoeScore} = useQuiz();

 
    return (
        <BrowserRouter>
            <EndQuizNav phase={phase} />
            <Routes>
                <Route path='/' element={<Start startQuiz={startQuiz} className="content" />} />
                <Route path="/quiz" element={<Question questionId={questionId} handleAnswer={handleAnswer} />} />
                <Route path="/results" element={<Results startQuiz={startQuiz} shoeScore={shoeScore} className="content" />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )

}


// since there's no direct way to go from quiz to results,
// useNavigate listens for changes in phase
function EndQuizNav ({phase}) {

    const navigate = useNavigate();

    useEffect(() => {
        if (phase === 'results') navigate('/results');
    }, [phase, navigate]);
    
    return null;
}

export default AppRouter