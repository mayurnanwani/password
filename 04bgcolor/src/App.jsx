import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className='w-full h h-screen duration-500'
    style={{backgroundColor: color}}>
      <div className='fixed flex bottom-12 w-full flex-wrap justify-center px-2 inset-x-0'>
        <div className='justify-center gap-3 shadow-lg bg-white px-3 py-2 flex flex-wrap  rounded-3xl'>
          <button onClick={ () => setColor("red")}className='outline-none px-4 py-1 rounded-full text-black shadow-lg 'style = {{backgroundColor:'red'}}>Red</button>
          <button onClick={ () => setColor("green")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style = {{backgroundColor:'green'}}>Green</button>
          <button onClick={ () => setColor("yellow")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style = {{backgroundColor:'yellow'}}>Yellow</button>
          <button onClick={ () => setColor("blue")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style = {{backgroundColor:'blue'}}>Blue</button>

        </div>
      </div>
    </div>
    
      
    
  )
}

export default App
