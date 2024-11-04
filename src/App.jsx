import { useState,useCallback,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Passwords,setPassword]=useState('efg')
  const [Length,setLength]=useState(8)
  const [Numbers,setNumbers]=useState(false)
  const [Characters,setCharacters]=useState(false)

 const generatePassword= useCallback(()=>{
   let pass=''
   let number='0123456789'
   let spcch='!@#$%^&*()'
   let str='ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuioplkjhgfdsazxcvbnm'
   if(Numbers){
    str+=number
   }
   if(Characters){
    str+=spcch
   }
   for(let i=1; i<Length; i++){
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
   }
   setPassword(pass)
  },[Numbers,Characters,Length])


  useEffect(()=>{
    generatePassword()
  },[Numbers,Characters,Length])

  console.log('Nu,ber',Numbers)
  return (
    <div className='flex flex-col gap-5'>
     <input
     className='border-s-violet-50'
      type='text'
      placeholder='passwords'
      value={Passwords}
     />
    <div className='flex gap-9'>
    <input
      type='range'
      onChange={(e)=>setLength(e.target.value)}
      min={8}
      max={100}
     />
     <div>
     <input
      type='checkbox'
      onChange={()=>setNumbers(!Numbers)}
     />
     <label>Numbers</label>
     </div>
     <div>
     <input
      type='checkbox'
      onChange={()=>setCharacters(!Characters)}
     />
     <label>Special Characters</label>
     </div>
    </div>
    </div>
  )
}

export default App
