import useQuiz from "../hooks/useQuiz"
import data from "../data/data.json"
import { useEffect } from "react";

function Question ({ questionId }) {

    const {handleAnswer, shoeScore} = useQuiz();

    function handleClick (answerPicked) {
        handleAnswer(answerPicked);
    }

    // temporary to track changes
    useEffect (() => {
        console.log(shoeScore);
    }, [shoeScore])
    
    return(
        <div>
            <div className="question-info">
                <h3>TRY ON QUIZ</h3>
                <h3>30 DAYS RISK FREE</h3>
            </div>
            <div>
                <p>{data.questions[questionId].copy}</p>
                <div>
                    <button onClick={() => handleClick(0)}
                        >{data.questions[questionId].answers[0].copy}</button>

                    <button onClick={() => handleClick(1)}
                        >{data.questions[questionId].answers[1].copy}</button>
                </div>
            </div>
        </div>
    )
}

export default Question