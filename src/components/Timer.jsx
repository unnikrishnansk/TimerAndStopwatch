import React , {useState ,useEffect} from 'react';


const Timer = ({initial}) => {
    
    const [timer, settimer] = useState(initial);
    const [timerOn, settimerOn] = useState(false);

    
    useEffect(() => {
        if(timerOn)
            {
        
        const interval = setInterval(() => {

            
            if(timer<1)
            {
                clearInterval(interval);
            }
            else
            {
                settimer((prev) => prev-1);
            }
            }, 1000);
        
        
        return () => {
            clearInterval(interval);
        }
    }
    }, [timer,timerOn]);
   
 

  return (
    <div className='timerbox'>
        <div className='headingdiv'><h3 className='heading'>TIMER</h3></div>

<div className='combinediv'>
        <div className='timerdiv'>
           <h1> <div> CountDown  : </div>
           <div className='showtimer'>{timer} sec</div></h1>
        </div>
        <div className='buttondiv'>
            {!timerOn && (
                <button onClick={() => settimerOn(true)} className='bttn1' >START</button>
            )}

            {timerOn && (
                <button onClick={() => settimerOn(false)} className='bttn1' >PAUSE</button>
            )}
        
        
        <button onClick={() => settimerOn(true)} className='bttn2' >RESUME</button>
        <button onClick={() => {settimerOn(false); settimer(initial)}} className='bttn2' >RESET</button> 
        </div>
        </div>
    </div>
  )
}

export default Timer;
