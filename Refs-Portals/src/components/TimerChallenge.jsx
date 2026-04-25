import {useState,useRef} from 'react';
import ResultModal from '../components/ResultModal';
export default function TimerChallenge({title,targetTime}){
    const dialog = useRef();
    const timer = useRef();
   const [timeRemaning,setTimeRemaning] = useState(targetTime*1000);

   const timerIsActive = timeRemaning > 0 && timeRemaning < targetTime*1000;

   if(timeRemaning<=0){
    clearInterval(timer.current);
    dialog.current.open();
   }

   function handleReset(){
    setTimeRemaning(targetTime*1000);
   }

    function handleStart(){
     timer.current  =  setInterval(()=>{
            setTimeRemaning(prevtargettime=>prevtargettime-10);
          
        },10);
    }

    function handleStop(){
        clearInterval(timer.current);
         dialog.current.open();
        

    }
return (
    <>
     <ResultModal ref={dialog}  remainingtime = {timeRemaning} targetTime={targetTime}  onReset = {handleReset}/>
   <section className="challenge">
    <h2>{title}</h2>
   
    <p className="challenge-time">
    {targetTime} second{targetTime>1?'s':''}
     </p>
     <p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
           {timerIsActive?'Stop':'Start'}Challenge
        </button>
     </p>
     <p className={timerIsActive?'active':undefined}>
     {timerIsActive ? 'Time is Running ....' : ' Timer inactive'} 
     </p>
   </section>
  </>


);
}