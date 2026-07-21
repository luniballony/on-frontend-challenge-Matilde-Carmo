import data from "../data/data.json"

function Question ({ questionId , handleAnswer}) {
    const question = data.questions[questionId];
    
    return(
        <div className="question-screen">
            <div className="question-info">
                <h3>TRY ON QUIZ</h3>
                <h3>30 DAYS RISK FREE</h3>
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
                            <button key={item.index} onClick={() => handleAnswer(item.index)}>
                                {item.copy}
                            </button> 
                    )}    
                </div>
            </div>
        </div>
    )
}

export default Question