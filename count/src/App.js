import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const  [count, setCount] = useState(0)
  function decre()
  {
    setCount(count -1);
  }
  function incre()
  {
    setCount(count+1);
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>Counter </h1>
      <h2>Cont : {count}</h2>
      <button onClick={incre}>increment</button>
      <button onClick={decre}>decrement</button>
      </header>
    </div>
  );
}

export default App;
