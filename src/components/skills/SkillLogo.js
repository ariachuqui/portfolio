import React from 'react';

export const SkillLogo = ({ skillsLogos, index, bigSize = true }) => {
    return (
        <>
            { 
                skillsLogos[index].includes('png')
                ?   <div 
                        className="portfolio__img"
                        key={index}
                    >
                        <img 
                            className="skills__img" 
                            src={`./assets/${ skillsLogos[index] }`} 
                            alt={skillsLogos[index]}
                        />
                    </div>
                        
                :   <i 
                        className={`fab ${ skillsLogos[index] } ${bigSize ? 'fa-3x' : 'fa-2x'} margin-b10`}
                        key={index}
                    ></i>
            }
        </>
    )
}
