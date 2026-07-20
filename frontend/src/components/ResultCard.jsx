
function ResultCard ({shoe}) {

    return (
        <div className="results-card">
            <div className="result-info"> 
                <img src={`shoes/${shoe.name}.png`} alt="TEST SHOE RESULT" />
            
                <p className="shoe-name">{shoe.name}</p>
                <p>Your perfect partner in the world's lightest fully-cushioned shoe for Running Remixed.</p>
                <div className="result-price-shade-box">    
                    <p className="result-price">200 CHF</p>
                    <p className="result-shade-name">Neon & Grey</p>
                </div>
                <p>SHADES</p>
            </div>
            <button className="btn-shop-now">Shop now</button>
        </div>
    )
}

export default ResultCard