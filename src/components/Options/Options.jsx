import { useState, useEffect } from 'react';

export default function Options() {
    const [clicks1, setClicks1] = useState(() => {
        const savedClicks = window.localStorage.getItem("saved-clicks-good"); 
      
        if (savedClicks !== null) {
            return savedClicks;
        }
        return 0;
    });

    const [clicks2, setClicks2] = useState(() => {
        const savedClicks = window.localStorage.getItem("saved-clicks-neutral"); 
      
        if (savedClicks !== null) {
            return savedClicks;
        }
        return 0;
    });

    const [clicks3, setClicks3] = useState(() => {
        const savedClicks = window.localStorage.getItem("saved-clicks-bad"); 
      
        if (savedClicks !== null) {
            return savedClicks;
        }
        return 0;
    });
  
    //=========================================
    const handleClick1 = () => {
    setClicks1(clicks1 + 1); 
    };
     const handleClick2 = () => {
    setClicks2(clicks2 + 1); 
    };
     const handleClick3 = () => {
    setClicks3(clicks3 + 1); 
    };
    const handleClickReset = () => {
      setClicks1(0);
      setClicks2(0);
      setClicks3(0);   
    };
    
    useEffect(() => {
        window.localStorage.setItem("saved-clicks-good", clicks1);
        window.localStorage.setItem("saved-clicks-neutral", clicks2);
        window.localStorage.setItem("saved-clicks-bad", clicks3);
  }, [clicks1, clicks2, clicks3]);

    return (
        <div>
            <button onClick={handleClick1}>Good  {clicks1}</button>
            <button onClick={handleClick2}>Neutral  {clicks2}</button>
            <button onClick={handleClick3}>Bad  {clicks3}</button>
            <button onClick={handleClickReset}>Reset</button>
        </div>
    )
}