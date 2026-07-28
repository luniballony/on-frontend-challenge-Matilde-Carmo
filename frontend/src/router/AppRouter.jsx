import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

import Start from '../screens/Start'
import Question from "../screens/Question";
import Results from '../screens/Results';
import Loading from '../screens/Loading';
import NotFound from '../screens/NotFound';

function AppRouter ({phase, questionId, handleAnswer, startQuiz, shoeScore}) {

    return (
        <BrowserRouter>
            <EndQuizNav phase={phase} />
            <Routes>
                <Route path='/' element={<Start startQuiz={startQuiz} className="content" />} />
                <Route path="/quiz" element={<Question questionId={questionId} handleAnswer={handleAnswer} />} />
                <Route path="/results" element={<Results startQuiz={startQuiz} shoeScore={shoeScore} className="content" />} />
                <Route path='/loading' element={<Loading />} />
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
        if (phase === 'results') {
            
            navigate('/loading');

            setTimeout(() => {
                navigate('/results');
            }, 1200); 

        }
    }, [phase]);
    
    return null;
}

export default AppRouter