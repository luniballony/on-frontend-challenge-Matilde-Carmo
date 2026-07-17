import ResultCard from "../components/ResultCard";

function Results () {
    // temporary variables for results message while we dont fetch data
    const temporaryShoe1 = "TEST SHOE 1";
    const temporaryShoe2 = "TEST SHOE 2";

    return (
        <div>
            <div className="result-info">
                <h2>Congratulations!</h2>
                <p>{`Based on your selection we've decided on the ${temporaryShoe1} and ${temporaryShoe2}! Enjoy the 30 day trial!`}</p>
            </div>
            <ResultCard />
            <p>Similar profiles</p>
            <ResultCard />
        </div>
    )
}

export default Results