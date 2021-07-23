import React from 'react';

import { Title } from '../layouts/Title';
import { SkillsBoard } from './SkillsBoard';

export const Skills = () => {

    return (
        <main 
            className="section height-100 skills"
        >
            <Title 
                text="Skills" 
                newClass="title__bottom1 text-center" 
            />
            <SkillsBoard />
        </main>
    )
}
