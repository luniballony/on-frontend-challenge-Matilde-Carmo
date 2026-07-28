import { useState } from "react";
import data from "../data/data.json"

function useQuiz () {

    // phase responsible only for dealing with transaction between quiz and results
    const [phase, setPhase] = useState('');

    // tracks the current question Id
    const [questionId, setQuestionId] = useState(0);

    const [shoeScore, setShoeScore] = useState(data.shoes);

    function startQuiz () {
        setQuestionId(0); // in case its called in Results
        
        setShoeScore(prevShoes =>
            prevShoes.map(item => ({
                ...item,
                rating: 0
            }))
        );
        
    }


    // when a user picks an answer, we call this function
    // this function should be responsible for updating score, questionId and phases
    function handleAnswer (pick) {

        // array based on the answer picked 
        const currentPick = data.questions[questionId].answers[pick];

        // updates shoes score based on the answer picked
        setShoeScore(prevShoes =>
            prevShoes.map(item => ({
                ...item,
                rating: item.rating + currentPick.ratingIncrease[item.id]
            }))
        );


        if (currentPick.nextQuestion === '') {
            
            setPhase("results");
        } else {
            setQuestionId(currentPick.nextQuestion);
        }        
    }


    return {phase, setPhase, startQuiz, questionId, setQuestionId, shoeScore, setShoeScore, handleAnswer}
}

export default useQuiz