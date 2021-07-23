import React from 'react';
import { Detail1 } from '../layouts/Detail1';
import { Detail2 } from '../layouts/Detail2';

import { Title } from '../layouts/Title';
import { Form } from './Form';


export const Contact = () => {
    return (
        <main className="section height-100 relative">
            <Title text="Contact" newClass="title__bottom3 text-center"/>
            <div className="contact__container">
                <Form />
            </div> 

            <div className="contact__detail1 absolute">
                <Detail1 />
            </div>
            <div className="contact__detail2 absolute">
                <Detail1 />
            </div>
            <div className="contact__detail3 absolute">
                <Detail2 />
            </div>
            <div className="contact__detail4 absolute">
                <Detail2 />
            </div>
            <div className="contact__detail5 absolute">
                <Detail2 />
            </div>
            <div className="contact__detail6 absolute">
                <Detail2 />
            </div>
            <div className="contact__detail7 absolute">
                <Detail1 />
            </div>
        </main>
    )
}
