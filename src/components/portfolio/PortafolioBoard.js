import React from 'react';
import { imagesProyects } from '../../data/data';

export const PortafolioBoard = ({ setSingleProyect }) => {
    
    return (
        <div className="portfolio__board flex-alignCenter flex-wrap">
            {
                imagesProyects.map( ({logo}, i) => 
                    <div 
                        className="portfolio__proyect"
                        onClick={ () => setSingleProyect({state: true, idProyect: i}) }
                        key={i}
                    >
                        <div className="portfolio__proyect-img">
                            <img 
                                className="img" 
                                src={`./assets/proyects-logos/${logo}` }
                                alt={ logo } 
                            />
                        </div>

                        <div className="portfolio__proyect-alert flex-center text-center">
                            <p className="c-white f-200">VIEW</p>
                            <p className="c-white f-200">PROJECT</p>
                        </div>
                    </div>    
                )
            }
        </div>
    )
}
