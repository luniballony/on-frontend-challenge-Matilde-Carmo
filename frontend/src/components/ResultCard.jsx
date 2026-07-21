import { useState } from "react";

function ResultCard ({shoe}) {

    // temporary data set to mimick the shade setcion
    const shadeSet = [
        {id: 'neon_grey', name: 'Neon & Grey', primary: '#808581', secondary: '#E2EB22'},
        {id: 'moss_orange', name: 'Moss & Orange', primary: '#285759', secondary: '#E9661D'},
        {id: 'navy_blue', name: 'Navy & Blue', primary: '#0A4776', secondary: '#2A7EAA'},
        {id: 'black_grey', name: 'Black & Grey', primary: '#0e0404', secondary: '#4F4F4F'}
    ]

    const [selectedShade, setSelectedShade] = useState(shadeSet[0]);

    return (
        <div className="results-card">
            <div className="result-card-content"> 
                <div className="shoe-image-wrapper">
                    <img src={`shoes/${shoe.name}.png`} alt={`${shoe.name} Image`} />
                </div>
            
                <p className="shoe-name">{shoe.name}</p>
                <p className="shoe-description">
                    Your perfect partner in the world's lightest fully-cushioned shoe for Running Remixed.
                </p>
                <div className="result-price-shade-container">    
                    <p className="result-price">200 CHF</p>
                    <p className="result-shade-name">{selectedShade.name}</p> {/* This would ideally take the actual shoe shade */}
                </div>
                <div className="shades">
                    {shadeSet.map((color) => (
                        <div key={color.id}
                             className={`shade-set ${
                                selectedShade.id === color.id ? "selected" : ""
                             }`}
                            onClick={() => setSelectedShade(color)} >
                            <div
                                className="primary-shade"
                                style={{ backgroundColor: color.primary }} />
                            <div
                                className="secondary-shade"
                                style={{ backgroundColor: color.secondary }} />
                            </div>
                        ))}
                    </div>    
            </div>
            <a href="https://www.on.com/de-ch/shop/shoes/sneakers" target="_blank" className="btn-shop-now">Shop now</a>
        </div>
    )
}

export default ResultCard