import data from "../data/data.json"

function Question ({ questionId , handleAnswer}) {
    const question = data.questions[questionId];
    
    return(
        <div className="question-screen">
            <div className="question-info">
                <p>TRY ON QUIZ</p>
                <p>30 DAYS RISK FREE</p>
            </div>
            <div>
                <p className="question">{question.copy}</p>
                <div className="btn-container">
                    {
                        // using map in case in the future we have questions with 
                        // more than 2 possible answers
                        question.answers.map((item, index) => 
                            // we should ideally use id to track the keys and
                            // handleAnswer, but since not all answers in the 
                            // file have id, we use index instead
                            <button key={index} onClick={() => handleAnswer(index)}>
                                {item.copy}
                            </button> 
                    )}    
                </div>
            </div>
        </div>
    )
}

export default Question