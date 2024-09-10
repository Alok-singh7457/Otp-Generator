import './App.css'

function App() {



  return (
    <>
      <div className='bg-gray-600'>

        <div className="header w-64 m-auto text-2xl font-bold pt-3 h-16 ">Otp-Generator</div>

        <div className="box w-[90vw] m-auto bg-slate-400 h-[90vh] flex-col px-3 pt-4 rounded-xl">
        <input type="text"
        className='h-11 w-96 rounded-xl outline-none text-xl'
        placeholder='Otp - Generator '
        />
        <p>Chracter  <input type="checkbox" name="" id="" /></p>
        <p>Range:5 <input type="range" name="" id="" /></p>
       
        

        </div>
      </div>


    </>
  )
}

export default App
