import React, { useEffect, useRef, useState } from 'react';

import { useParallax } from '../../hooks/useParallax';

export const Title = ({ text = '', newClass = '', }) => {
    const [ letters, setLetters] = useState();
    const elRefs = useRef([]);

    //parallax effect
    const offsetY = useParallax();

    //UseEffect for ech letter of the text.
    useEffect(() => {
        setLetters( text.split('') );
    }, [text]);

    //UseEffect First Animation.
    useEffect(() => {
        if(letters) {
            for(let i = 0; i < letters.length; i++) {
                //get letter dom.
                const el = elRefs.current[i];

                //add class animation in the right time.
                setTimeout(() => {
                    el.classList.add(`title__letter${i}`);
                }, (i * 50));
                
                //remove class animation, so it can be repeted.
                setTimeout(() => {
                    el.classList.remove(`title__letter${i}`);
                    el.classList.add(`title__active`);
                }, 1100);
            }
        }
    }, [letters])
        


    //OnMouseEnter Function:  Hover Animation.
    const hoverAnimation = ({ target }, i) => {
        //add class animation.
        target.classList.add(`title__letter${i}`);

        //remove class animation, so it can be repeted.
        setTimeout(() => {
            target.classList.remove(`title__letter${i}`);
        }, 650);
    }

    return (
        <h2 
            className={`c-white ${newClass}`}
            style = {{ transform: `translateY(-${(offsetY - 0.8 ) * 0.1}px)`}}
        >
            {
                letters &&
                letters.map( (letter, i) => 
                    <span 
                        className={`rubber-band f-800`}
                        ref={ref => elRefs.current.push(ref)}
                        onMouseEnter={ (e) => hoverAnimation(e, i) }
                        key={i}
                    > 
                        {letter} 
                    </span>    
                )
            }
        </h2>
    )
}
