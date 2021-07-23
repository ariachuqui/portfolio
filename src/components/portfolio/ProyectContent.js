import React from 'react';
import { imagesProyects } from '../../data/data';
import { SkillLogo } from '../skills/SkillLogo';

export const ProyectContent = ({ idProyect, animateContent }) => {
    const { 
        title, 
        img,
        description, 
        frontendTech, 
        backendTech, 
        frontendGit, 
        BackendGit, 
        liveLink } = imagesProyects[idProyect];

    return (
        <div className={`portfolio__single-content relative animate__animated ${ animateContent } animate__faster`}>

            {/* "title" */}
            <h2 className="portfolio__single-title portfolio__container c-white flex-center"> 
                { title }
            </h2>

            {/* "photo" */}
            <div className="portfolio__single-img">
                <img 
                    src={`./assets/proyects-webs/${ img }`} 
                    alt="test" 
                />
            </div>
            
            {/* "description" */}
            <p className="portfolio__single-desc c-white f-300 portfolio__container flex-center">
                { description } 
            </p>
            
            {/* "technologies" */}
            <div className="portfolio__single-tech flex-between">
                <div className="width-100">
                    <p className="f-400 f-bold c-white"> Frontend </p>
                    <div className="portfolio__skills">
                        {
                            frontendTech.map( (s, i) => <SkillLogo key={i} skillsLogos={ frontendTech } index={ i } bigSize={false}/> )
                        }
                    </div>

                </div>

                {
                    backendTech && 
                        <div className="width-100">
                            <p className="f-400 f-bold c-white"> Backend </p>
                            <div className="portfolio__skills">
                                {
                                    backendTech.map( (s, i) => <SkillLogo key={i} skillsLogos={ backendTech } index={ i } bigSize={false}/> )
                                }
                            </div>

                        </div>

                }
                
            </div>
            
            {/* "links" */}
            <div className="portfolio__single-links">
                {
                    frontendGit &&
                        <a 
                            href={ frontendGit }
                            className="portfolio_square flex-center flex-wrap"
                        >
                            <p className="f-200 margin-b10 c-white">Frontend</p>
                            <i className="sidebar_icon fab fa-github"></i>
                        </a>
                    }

                {
                    BackendGit &&
                        <a 
                            href={ BackendGit }
                            className="portfolio_square flex-center flex-wrap"
                        >
                            <p className="f-200 margin-b10 c-white">Backend</p>
                            <i className="sidebar_icon fab fa-github"></i>
                        </a>

                }
                
                <a 
                        href={ liveLink } 
                        className="portfolio_square flex-center flex-wrap"
                    >
                        <p className="f-200 margin-b10 c-white">Live Link</p>
                        <i className="sidebar_icon far fa-window-maximize"></i>
                </a>
            </div>
        </div>
    )
}
