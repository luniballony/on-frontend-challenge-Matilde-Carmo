
function ResultCard ({shoe}) {

    return (
        <div>
            <img src={`shoes/${shoe.name}.png`} alt="TEST SHOE RESULT" />
            <div className="result-info"> 
                <p>{}</p>
                <p>Your perfect partner in the world's lightest fully-cushioned shoe for Running Remixed.</p>
                <div className="result-price-shade">    
                    <p>200 CHF</p>
                    <p>Neon & Grey</p>
                </div>
                <p>SHADES</p>
            </div>
            <button className="btn-shop-now">Shop now</button>
        </div>
    )
}

export default ResultCard