import ResultCard from "../components/ResultCard";

function Results ({startQuiz, shoeScore}) {

    let highestScore = shoeScore[0];

    for (const shoe of shoeScore) {
        if (shoe.rating > highestScore.rating) {
            highestScore = shoe;
        }
    }

    return (
        <div className="results-screen">
            <div className="result-info">
                <h2>Congratulations!</h2>
                <p>{`Based on your selection we've decided on the ${highestScore.name}! Enjoy the 30 day trial!`}</p>
            </div>
            <ResultCard shoe = { highestScore } />
            <p id="similar-profiles-txt">Similar profiles</p>
            {
                shoeScore
                    .filter((current) => (current.id != highestScore.id)) // filters out highest scored shoe
                    .sort((a, b) => b.rating - a.rating) // sorts shoe by score desc
                    .map((item) => <ResultCard shoe = {item} />) // renders the remaining shoes
            }
            
            <button className="btn-restart" onClick={startQuiz}>Restart Quiz</button>
        </div>
    )
}

export default Results