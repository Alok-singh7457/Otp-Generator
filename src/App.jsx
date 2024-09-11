
import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  
const [rangeValue , setRangeValue] = useState(4)
const [allowedChar , setAllowedChar] = useState(false)
const [otp, setOtp] = useState('') 
 
const otpGenerator = useCallback (() => {
   let otp = ''
    let str = '1234567890'
  let chracter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  
  let combine = (str + chracter)

      if(allowedChar != true){
        for (let i= 1; i <= rangeValue ; i++){
          otp += Math.floor(Math.random()*10)
         
    } 
      } else {
          for (let i = 1 ; i <= rangeValue; i++){
             otp += combine.charAt(Math.floor(Math.random()*chracter.length + 1))
              }
      console.log(otp)
      }
  return otp;
  },[allowedChar , rangeValue])
 
  useEffect(() => {
    const newOtp = otpGenerator();  // Generate a new OTP
    setOtp(newOtp);
  }, [rangeValue, allowedChar, otpGenerator])
  


 

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
           setAllowedChar((prev) => !prev)
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
