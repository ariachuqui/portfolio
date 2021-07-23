import React, { useState } from 'react';

import { Title } from '../layouts/Title';
import { PortafolioBoard } from './PortafolioBoard';
import { SingleProyect } from './SingleProyect';

export const Portfolio = () => {
    const [{state, idProyect}, setSingleProyect] = useState({state: false, idProyect: null})

    return (
        <main className="section">
            <Title text="Portfolio" newClass="title__bottom2 text-center" />
            <PortafolioBoard setSingleProyect={ setSingleProyect } />
            {
                state && 
                <SingleProyect idProyect={ idProyect } setSingleProyect={ setSingleProyect } />
            }
        </main>
    )
}
