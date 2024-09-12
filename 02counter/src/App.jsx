import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  //let counter = 15
  let [counter,setCounter]=useState(15)
  const addValue= () => {
    //counter=counter+1;
    //for (const co in useState) {
      //if (useState[0] < 20) {
        setCounter(counter+1)
        
        
      //}
    //}
    
  }
  const decValue= () => {
   // for (const counter in object) {
    //  if (counter > 0){
        setCounter(counter-1)
        
      //}
   // }
    
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br/>
    <button onClick={decValue}>Decrease value</button>

    </>
  )
}

export default App
