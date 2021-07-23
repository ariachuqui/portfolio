import { useEffect, useState } from 'react';

export const useParallax = () => {
    const [offsetY, setoffsetY] = useState( 0 );
    const handleScroll = () => setoffsetY( window.pageYOffset );

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return offsetY;
}
