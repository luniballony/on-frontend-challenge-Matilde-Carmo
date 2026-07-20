
function ResultCard ({shoe}) {

    // temporary data set to mimick the swatch setcion
    const shadeSet = [
        {name: 'Grey', primary: '#808581', secondary: '#E2EB22'},
        {name: 'Moss', primary: '#285759', secondary: '#E9661D'},
        {name: 'Blue', primary: '#0A4776', secondary: '#2A7EAA'},
        {name: 'Black', primary: '#0e0404', secondary: '#4F4F4F'}
    ]

    return (
        <div className="results-card">
            <div className="result-info"> 
                <img src={`shoes/${shoe.name}.png`} alt="TEST SHOE RESULT" />
            
                <p className="shoe-name">{shoe.name}</p>
                <p>Your perfect partner in the world's lightest fully-cushioned shoe for Running Remixed.</p>
                <div className="result-price-shade-box">    
                    <p className="result-price">200 CHF</p>
                    <p className="result-shade-name">Neon & Grey</p> {/* This would ideally take the actual shoe shade */}
                </div>
                <div className="swatches">
                    {
                        shadeSet.map((color) => (
                            <div className="swatch-set" key={color.name}>
                                <div className="primary-swatch" style={{ backgroundColor: color.primary }} />
                                <div className="secondary-swatch" style={{ backgroundColor: color.secondary }} />
                            </div>
                        ))
                    }     
                </div>      
            </div>
            <a href="https://www.on.com/en-pt/shop/shoes/running" target="_blank" className="btn-shop-now">Shop now</a>
        </div>
    )
}

export default ResultCard