import data from "../data/data.json"

function Question ({ questionId , handleAnswer}) {
    const question = data.questions[questionId];
    
    return(
        <div className="question-page">
            <div className="question-info">
                <h3>TRY ON QUIZ</h3>
                <h3>30 DAYS RISK FREE</h3>
            </div>
            <div>
                <p>{question.copy}</p>
                <div className="btn-box">
                    <button onClick={() => handleAnswer(0)}
                        >{question.answers[0].copy}</button>

                    <button onClick={() => handleAnswer(1)}
                        >{question.answers[1].copy}</button>
                </div>
            </div>
        </div>
    )
}

export default Question