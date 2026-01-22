import React from 'react'
import { useState } from 'react'

const Calculator = () => {

    const [value,setValue] = useState("")

    const handelClick = (e)=>{
        setValue(value+e.target.value)
    };



    const clear = ()=>{
        setValue("")
    }

    
    const calculate = ()=>{
            try{
                setValue(eval(value));
            }
            catch{
                setValue("Error")
            }
    }
  return (
    <div className='min-h-screen flex items-center justify-center '>
      
      <div className='bg-gray-800 p-6 rounded-2xl shadow-2xl w-[340px]'>

        <input 
          type="text" 
          value={value} 
          readOnly 
          className='w-full h-20 mb-5 rounded-xl bg-black text-green-400 text-3xl text-right px-4 outline-none'
        />

        <div className='grid grid-cols-4 gap-4'>
          <button value="c" onClick={clear} className='h-14 rounded-xl bg-red-500 text-white text-xl font-semibold hover:bg-red-600 active:scale-95'>C</button>
          <button value="%" onClick={handelClick} className='h-14 rounded-xl bg-orange-500 text-white text-xl hover:bg-orange-600 active:scale-95'>%</button>
          <button value="*" onClick={handelClick} className='h-14 rounded-xl bg-orange-500 text-white text-xl hover:bg-orange-600 active:scale-95'>*</button>
          <button value="/" onClick={handelClick} className='h-14 rounded-xl bg-orange-500 text-white text-xl hover:bg-orange-600 active:scale-95'>/</button>

          <button value="7" onClick={handelClick} className='btn  text-white'>7</button>
          <button value="8" onClick={handelClick} className='btn  text-white'>8</button>
          <button value="9" onClick={handelClick} className='btn  text-white'>9</button>
          <button value="-" onClick={handelClick} className='h-14 rounded-xl bg-orange-500 text-white text-xl hover:bg-orange-600 active:scale-95'>-</button>

          <button value="4" onClick={handelClick} className='btn  text-white'>4</button>
          <button value="5" onClick={handelClick} className='btn  text-white'>5</button>
          <button value="6" onClick={handelClick} className='btn  text-white'>6</button>
          <button value="+" onClick={handelClick} className='h-14 rounded-xl bg-orange-500 text-white text-xl hover:bg-orange-600 active:scale-95'>+</button>

          <button value="1" onClick={handelClick} className='btn  text-white'>1</button>
          <button value="2" onClick={handelClick} className='btn  text-white'>2</button>
          <button value="3" onClick={handelClick} className='btn  text-white'>3</button>
          <button value="+" onClick={handelClick} className='h-14 rounded-xl bg-orange-500 text-white text-xl hover:bg-orange-600 active:scale-95'>+</button>

          <button value="0" onClick={handelClick} className='btn  text-white col-span-2'>0</button>
          <button value="." onClick={handelClick} className='btn  text-white'>.</button>
          <button value="=" onClick={calculate} className='h-14 rounded-xl bg-green-500 text-white text-xl font-bold hover:bg-green-600 active:scale-95'>=</button>
        </div>

      </div>
    </div>
  )
}

export default Calculator
