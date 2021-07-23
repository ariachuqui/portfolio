import React from 'react';
import { Hero } from './components/hero/Hero';
import { Portfolio } from './components/portfolio/Portfolio';
import { Skills } from './components/skills/Skills';
import { Contact } from './components/contact/Contact';

export const App = () => {
    return (
        <>
            <Hero />
            <Skills />
            <Portfolio />
            <Contact />
        </>
    )
}
