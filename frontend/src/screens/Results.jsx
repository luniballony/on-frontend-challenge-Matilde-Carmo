import ResultCard from "../components/ResultCard";

function Results ({startQuiz, shoeScore}) {
 
    // sorts shoe by score desc, preventing mutation of state
    const sortedShoes = [...shoeScore].sort((a, b) => b.rating - a.rating); 

    // name of the featured shoes
    let featuredText = `${sortedShoes[0].name}`; 

    // show a maximum of two "best matches"
    // if the top two shoes tie, display both
    // additional ties are intentionally shown under "Similar profiles"
    // to keep the recommendations concise
    let numberOfShoes = 1;
    if (sortedShoes[0].rating === sortedShoes[1].rating) {
        numberOfShoes ++;
        featuredText = `${sortedShoes[0].name} and ${sortedShoes[1].name}`; // updates message in case of tie
    }
    

    // trims to only get highest scores
    let featuredShoes = sortedShoes.slice(0, numberOfShoes);
    
    return (
        <div className="results-screen">
            <div className="result-info">
                <h2>Congratulations!</h2>
                <p>{`Based on your selection we've decided on the ${featuredText}! Enjoy the 30 day trial!`}</p>
            </div> 

            <div className="featured-container">
                {
                    featuredShoes.map ((item) => 
                        <ResultCard key={item.id} shoe = { item } />)
                }
            </div>

            <p id="similar-profiles-txt">Similar profiles</p>

            <div className="similar-profile-container">
                {
                    sortedShoes
                        .slice(numberOfShoes) // removes the highest scored shoes
                        .map((item) => <ResultCard key={item.id} shoe = {item} />) // renders the remaining shoes
                }
            </div>
            <button className="btn-restart" onClick={startQuiz}>Restart Quiz</button>
        </div>
    )
}

export default Results