import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const [result, setResult] = useState(null); 
  //const [inputRef, setInput] = useState(null); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
  function minus(e) { 
    e.preventDefault(); 
    if(result==null){
      setResult((result) => result + Number(inputRef.current.value)); 
    }else{
      setResult((result) => result - Number(inputRef.current.value)); 
    }
  };
 
  function times(e) { 
    e.preventDefault(); 
    if(result==null){
      setResult(result + Number(inputRef.current.value)); 
    }else{
      setResult((result) => result * Number(inputRef.current.value));  
    }
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    if(result==null){
      setResult(result + Number(inputRef.current.value)); 
    }else{
      setResult((result) => result / Number(inputRef.current.value));  
    }
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = "";
  }; 
 
  function resetResult(e) { 
    e.preventDefault(); 
  	setResult((result) => null);
  }; 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p>{result}</p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button> 
        <button onClick={times}>multiply</button> 
        <button onClick={divide}>divide</button> 
        <button onClick={resetInput}>reset input</button> 
        <button onClick={resetResult}>reset result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
