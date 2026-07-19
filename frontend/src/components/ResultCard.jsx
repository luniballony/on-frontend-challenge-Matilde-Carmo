function ResultCard ({highestScore}) {

    console.log("test in resultsCard: ")
    console.log(highestScore);
    return (
        <div>
            <img src="shoes/Cloud.png" alt="TEST SHOE RESULT" />
            <div className="result-info"> 
                <p>{}</p>
                <p>SHOE DESCRIPTION</p>
                <div className="result-price-shade">    
                    <p>200 CHF</p>
                    <p>{}</p>
                </div>
                <p>SHADES</p>
            </div>
            <button className="btn-shop-now">Shop now</button>
        </div>
    )
}

export default ResultCard