import { useState } from "react";
import data from "../data/data.json"

function useQuiz () {

    // responsible to track users position: start / quiz / results
    const [phase, setPhase] = useState('start');

    // tracks the current question Id
    const [questionId, setQuestionId] = useState(0);

    const [shoeScore, setShoeScore] = useState(data.shoes);

    function startQuiz () {
        setPhase('quiz');
    }

    // when a user picks an answer, we call this function
    // this function should be responsible for updating score, questionId and phases
    function handleAnswer (pick) {

        // array based on the answer picked 
        const currentPick = data.questions[questionId].answers[pick];

        if (currentPick.nextQuestion === '') {
            console.log('#### TEST HAS ENDED ######'); // temporary
            setPhase('results');
            return;
        }

        setQuestionId(currentPick.nextQuestion);

        // updates shoes score based on the answer picked
        setShoeScore(prevShoes =>
            prevShoes.map(item => ({
                ...item,
                rating: item.rating + currentPick.ratingIncrease[item.id]
            }))
        );
        
    }
      

    return {phase, startQuiz, questionId, setQuestionId, shoeScore, setShoeScore, handleAnswer}
}

export default useQuiz