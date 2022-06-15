import React , {useState , useEffect} from 'react';

const Stopwatch = () => {

    const [stopwatch, setstopwatch] = useState(0);
    const [stopwatchOn, setstopwatchOn] = useState(false);

    useEffect(() => {
        let interval = null;

        if(stopwatchOn)
        {
           interval = setInterval(() => {
                setstopwatch((prev) => prev+10);
            }, 10);
        }
        else{
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        }
    }, [stopwatchOn])

  return (
    <div className='timerbox'>
        <div className='headingdiv'><h3 className='heading'>STOPWATCH</h3></div>

        <div className='combinediv'>
        <div className='timerdiv'>
        <h1><span className='showtimer'>{("0"+ Math.floor((stopwatch/60000)%60)).slice(-2)} : </span>
        <span className='showtimer'>{("0"+Math.floor((stopwatch/1000)%60)).slice(-2)} : </span>
        <span className='showtimer'>{("0"+((stopwatch/10)%100)).slice(-2)}</span></h1>
        </div>
        <div className='buttondiv'>

            {!stopwatchOn && (
                <button className='bttn1' onClick={() => setstopwatchOn(true)}>START</button>
            ) }

            {stopwatchOn && (
                <button className='bttn1' onClick={() => setstopwatchOn(false)}>STOP</button>
            ) }
        
        
        <button className='bttn2' onClick={() => setstopwatchOn(true)}>RESUME</button>
        <button className='bttn2' onClick={() => {setstopwatch(0); setstopwatchOn(false)}}>RESET</button>
        </div>
        </div>
    </div>
  )
}

export default Stopwatch;