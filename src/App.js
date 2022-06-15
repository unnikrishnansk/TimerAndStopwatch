
import './App.css';
import Timer from './components/Timer';
import Stopwatch from './components/Stopwatch';
import { useState } from 'react';

function App() {

  let initial = 100;

  const [toggle, settoggle] = useState(false);

  return (
    <div className="App">

      <button className='togglebttn' onClick={() => settoggle(!toggle)}>{(toggle ? "GO TO STOPWATCH" : "GO TO TIMER")}</button>

      {(toggle) ? <Timer initial={initial}/> : <Stopwatch />}
     
     
    </div>
  );
}

export default App;
