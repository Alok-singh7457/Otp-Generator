
import { useState } from 'react'
import './App.css'

function App() {
  
const [rangeValue , setRangeValue] = useState(4)
const [allowedChar , setAllowedChar] = useState(false)
 const chracter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const otpGenerator = () => {
  let otp = ''
      if(allowedChar != true){
        for (let i= 1; i <= rangeValue ; i++){
          otp += Math.floor(Math.random()*10)
         
    } 
      } else {
          for (let i = 1 ; i <= rangeValue; i++){
             otp += chracter.charAt(Math.floor(Math.random()*chracter.length + 1))
             console.log(otp)
          }
      console.log(otp)
      }
  return otp;
  }
  const otp = otpGenerator();
  


 

  return (
    <>
      <div className='bg-gray-600'>

        <div className="header w-64 m-auto text-2xl font-bold pt-3 h-16 ">Otp-Generator</div>

        <div className="box w-[90vw] m-auto bg-slate-400 h-[90vh] flex-col px-3 pt-4 rounded-xl">

          <input type="text"
            value={otp}
            readOnly
            className='h-11 w-96 rounded-xl outline-none text-xl'
            placeholder='Otp - Generator '
          />

          <p>Chracter  <input type="checkbox" name="" id=""
          onChange={(e) => { 
            if (e.target.checked) {
              setAllowedChar(true); // Call your function when checkbox is checked
            }
          }} 
         /></p>
          <p>Range:{rangeValue} <input type="range" name="" id="" onChange={(e) => setRangeValue(e.target.value)} 
          min={4}
          max={10}
          /></p>



        </div>
      </div>


    </>
  )
}

export default App
