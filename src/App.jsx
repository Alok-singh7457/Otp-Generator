
import { useState } from 'react'
import './App.css'

function App() {
  
  const [value , setValue] = useState(5)

  return (
   <>  {value}
        <div>
        <h1>Setup a Counter</h1> hfdsoshvglokafdsjvkkajfdbv
        <button onClick={() => setValue(value+1)}>r4rr+</button>
        {value}
        <button onClick={ () => setValue(value-1)}>-</button>
        </div>
{value}

   </>
  )
}

export default App
