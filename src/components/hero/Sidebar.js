import React, { useEffect, useState } from 'react'
import { useParallax } from '../../hooks/useParallax';
import { Draw2 } from './Draw2'

export const Sidebar = () => {

    const [showDraw, setShowDraw] = useState(false);

    //hook parallax to animate sidebar in scroll
    const offsetY = useParallax();

    //First Animation of the sidebar
    useEffect(() => {
        setShowDraw( true );
    }, [])



    return (
        <aside 
            className = {`sidebar ${ showDraw && 'show-sidebar' }`}
            style = {{transform: `${ showDraw && `translateX(${offsetY * 0.6}px)`} `}}
        >
            <Draw2 />
            <div className="sidebar_container flex-between">
                <a 
                    href="https://www.linkedin.com/in/ariachuqui/"
                    className="square flex-center"
                >
                    <i className="sidebar_icon fab fa-linkedin-in"></i>
                </a>
    
                <a 
                    href="https://github.com/ariachuqui" 
                    className="square flex-center"
                >
                    <i className="sidebar_icon fab fa-github"></i>
                </a>
    
                <a 
                    href="https://drive.google.com/file/d/1pvol7Jp9H3-rlmm4XewPHHxy4c1G7D2u/view?usp=sharing" 
                    className="square flex-center"
                >
                    <i className="sidebar_icon fas fa-address-card"></i>
                </a>
            </div>
        </aside>
    )
}
