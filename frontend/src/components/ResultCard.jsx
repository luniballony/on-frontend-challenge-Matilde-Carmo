
function ResultCard ({shoe}) {

    // temporary data set to mimick the swatch setcion
    const shadeSet = [
        {id: 'neon_grey', name: 'Neon & Grey', primary: '#808581', secondary: '#E2EB22'},
        {id: 'moss_orange', name: 'Moss & Orange', primary: '#285759', secondary: '#E9661D'},
        {id: 'navy_blue', name: 'Navy & Blue', primary: '#0A4776', secondary: '#2A7EAA'},
        {id: 'black_grey', name: 'Black & Grey', primary: '#0e0404', secondary: '#4F4F4F'}
    ]

    return (
        <div className="results-card">
            <div className="result-card-content"> 
                <img src={`shoes/${shoe.name}.png`} alt={`${shoe.name} Image`} />
            
                <p className="shoe-name">{shoe.name}</p>
                <p className="shoe-description">
                    Your perfect partner in the world's lightest fully-cushioned shoe for Running Remixed.
                </p>
                <div className="result-price-shade-container">    
                    <p className="result-price">200 CHF</p>
                    <p className="result-shade-name">{shadeSet[0].name}</p> {/* This would ideally take the actual shoe shade */}
                </div>
                <div className="swatches">
                    {
                        shadeSet.map((color) => (
                            <div className="swatch-set" key={color.id}>
                                <div className="primary-swatch" style={{ backgroundColor: color.primary }} />
                                <div className="secondary-swatch" style={{ backgroundColor: color.secondary }} />
                            </div>
                        ))
                    }     
                </div>      
            </div>
            <a href="https://www.on.com/de-ch/shop/shoes/sneakers" target="_blank" className="btn-shop-now">Shop now</a>
        </div>
    )
}

export default ResultCard