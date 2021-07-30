import React, { useEffect, useState } from 'react';
import { imagesProyects } from '../../data/data';
import { ProyectContent } from './ProyectContent';

export const SingleProyect = ({ idProyect, setSingleProyect }) => {
    const [animateContainer, setAnimateContainer] = useState('');
    const [animateContent, setAnimateContent] = useState('');
    const [inSpanish, setInSpanish] = useState(false);

    //Animate when the user open de proyect
    useEffect(() => {
        if( idProyect || idProyect === 0) {
            setAnimateContainer( 'animate__fadeIn' );
        }
    }, [idProyect, setAnimateContainer]);

    //Prev Proyect with animation
    const handlePrev = () => {
        
        let newId = idProyect - 1;
        if( idProyect === 0 ) {
            newId = (imagesProyects.length - 1);
        }
        setSingleProyect( p => ({ ...p, idProyect: newId }) )
        setAnimateContent( 'animate__fadeInLeft' );
        setTimeout(() => {
            setAnimateContent( '' );
        }, 500);

    }    

    //Next Proyect with animation
    const handleNext = () => {
        
        let newId = idProyect + 1;
        if( idProyect === imagesProyects.length - 1 ) {
            newId = 0;
        }
        setSingleProyect( p => ({ ...p, idProyect: newId }) )
        setAnimateContent( 'animate__fadeInRight' );
        setTimeout(() => {
            setAnimateContent( '' );
        }, 500);
    }

    //Handle Languages 
    const handleLanguage = () => {
        setInSpanish( prev => !prev );
    }

    return (
        <div className={`portfolio__single-container animate__animated ${ animateContainer } animate__faster`} >
            <div 
                className="portfolio__single-background"
                onClick ={ () => setSingleProyect({state: false, idProyect: null}) }
            ></div>

            <div className="portfolio__single relative" >

                <div className="btn-language absolute">
                    <p className="f-200 c-white f-bold">EN</p>
                    <div 
                        className="circle-container"
                        onClick={ handleLanguage }
                    >
                        <div className={`circle ${inSpanish && 'circle-move'}`}></div>
                    </div>
                    <p className="f-200 c-white f-bold">ES</p>
                </div>
                <div 
                    className="portfolio__close c-white"
                    onClick ={ () => setSingleProyect({state: false, idProyect: null}) }
                >
                    <i className="fas fa-times f-500 c-gray"></i>
                </div>

                <div 
                    className="portfolio_arrow left absolute flex-center"
                    onClick={ handlePrev }
                >
                    <i className="fas fa-chevron-left f-200"></i>
                </div>

                <ProyectContent idProyect={ idProyect } animateContent={ animateContent } inSpanish={ inSpanish } />

                <div 
                    className="portfolio_arrow right absolute flex-center"
                    onClick={ handleNext }
                >
                    <i className="fas fa-chevron-right f-200"></i>
                </div>
            </div>
            
        </div>
    )
}
