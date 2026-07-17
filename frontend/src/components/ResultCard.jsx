function ResultCard () {
    return (
        <div>
            <img src="shoes/Cloud.png" alt="TEST SHOE RESULT" />
            <div className="result-info"> 
                <p>SHOE NAME</p>
                <p>SHOE DESCRIPTION</p>
                <div className="result-price-shade">    
                    <p>200 CHF</p>
                    <p>TEMPORARY SHADE NAME</p>
                </div>
                <p>SHADES</p>
            </div>
            <button className="btn-shop-now">Shop now</button>
        </div>
    )
}

export default ResultCard