import { useState } from "react";
import data from "../data/data.json"

function useQuiz () {

    // responsible to track users position: start / quiz / results
    const [phase, setPhase] = useState('start');

    // tracks the current question Id
    const [questionId, setQuestionId] = useState(0);

    const [shoeScore, setShoeScore] = useState(data.shoes);

    const [isLoading, setIsLoading] = useState(false);

    function startQuiz () {
        setIsLoading(true); // in a bigger project, we would should 'Loading' while we start the quiz
        setPhase('quiz');
        setQuestionId(0); // in case its called in Results
        
        setShoeScore(prevShoes =>
            prevShoes.map(item => ({
                ...item,
                rating: 0
            }))
        );
        
        setIsLoading(false);
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
            // setIsLoading(true);
            
            setPhase("results");
            
            // // shows 'Loading' before results
            // setTimeout(() => {
            //     setPhase("results");
            //     setIsLoading(false);
            // }, 1200); 
        } else {
            setQuestionId(currentPick.nextQuestion);
        }        
    }


    return {phase, setPhase, startQuiz, questionId, setQuestionId, shoeScore, setShoeScore, handleAnswer, isLoading}
}

export default useQuiz