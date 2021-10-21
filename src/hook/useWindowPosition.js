import { useLayoutEffect, useState } from "react";

export default function useWindowPosition(id) { 
   const [animation, setAnimation] = useState(false);

   useLayoutEffect(() => {
        function updatePosition() {
            const offsetSetHeight = window.document.getElementById(id).offsetHeight;
            //console.log("windowPageOffset", window.pageYOffset, offsetSetHeight * 0.7);
            if(window.pageYOffset > offsetSetHeight * 0.5){ //Once we scroll to 70% of the Header then the animation of the cards will happen
                setAnimation(true);
            }
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        
        return () => window.removeEventListener('scroll', updatePosition);
   }, [id]);


   return animation;
}
