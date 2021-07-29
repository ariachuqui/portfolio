import React from 'react';

import { useParallax } from '../../hooks/useParallax';

import { Draw1 } from './Draw1';
import { Title } from '../layouts/Title';
import { Sidebar } from './Sidebar';
import { Detail1 } from '../layouts/Detail1';
import { Detail2 } from '../layouts/Detail2';


export const Hero = () => {
    //Parallax Effect
    const offsetY = useParallax();
    
    return (
        <main className="section height-100" >
            <div className="hero__logo  container" >
                <h2 
                    className="hero__profession c-white f-300 f-regular letter-s"
                    style = {{ transform: `translateY(-${(offsetY - 0.5 ) * 0.3}px)`}}
                >FullStack Developer</h2>
                <Title text="Ariana" />
                <Title text="Chuquiruna" />
            </div>
            <Draw1 />
            <Sidebar />

            <div className="hero__detail1 animate__animated animate__fadeIn absolute">
                <Detail1 />
            </div>
            <div className="hero__detail2 animate__animated animate__fadeIn absolute">
                <Detail1 />
            </div>
            <div className="hero__detail3 animate__animated animate__fadeIn absolute">
                <Detail2 />
            </div>
            <div className="hero__detail4 animate__animated animate__fadeIn absolute">
                <Detail2 />
            </div>
        </main>
    )
}
