import React, { useRef, useState } from 'react';
import { skillsLogos, skillsNames } from '../../data/data'
import { SkillLogo } from './SkillLogo';

export const SkillsBoard = () => {
    //popout animation
    const [popout, setPopout] = useState(false)

    const board = useRef()

    //3D Animation
    const handleMouseMove = ( e ) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 45;
        let yAxis = (window.innerHeight * 1.5 - e.pageY) / 10;
        board.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    }

    //Animate In
    const handleMouseEnter = ( e ) => {
        //we take out the transition
        setTimeout(() => {
            board.current.style.transition = `none`
        }, 400);
        //Popout
        setPopout(true)
    }

    //Animate Out
    const handleMouseLeave = ( e ) => {
        //we put in the transition
        board.current.style.transition = `all 0.3s ease`
        board.current.style.transform = `rotateY(0deg) rotateX(0deg)`
        setPopout(false)
    }

    return (
        <div
            className="skills__board-container"
            onMouseMove={ handleMouseMove }
            onMouseLeave={ handleMouseLeave }
            onMouseEnter={ handleMouseEnter }
        >
            <div 
                className="skills__board flex-between flex-wrap container"
                ref={board}
            >
                {
                    skillsNames.map( (s, i) => 
                        <div 
                            className="skills__skill text-center"
                            key={i}
                        >
                            <SkillLogo skillsLogos={ skillsLogos } index={ i } />
                            <p 
                                className={`f-300 f-bold c-white skills__title ${popout && 'popout'}`}
                            >{ s }</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
