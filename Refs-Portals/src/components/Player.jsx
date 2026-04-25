import { useState,useRef} from "react";

export default function Player() {
  const inputf = useRef();
 const [enteredPlayerName,setPlayername] = useState(null);

 function OnClcHandle(){
  setPlayername(inputf.current.value);
    inputf.current.value='';
 }

  return (
    
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'Unknown Entity'} </h2>
      <p>
        <input ref={inputf} type="text" />
        <button onClick={OnClcHandle}>Set Name</button>
      </p>
    </section>
  );
}
