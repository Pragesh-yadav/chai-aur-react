import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)


  //let counter = 5


  const addValue = () =>{
      setCounter(prevCounter => prevCounter + 1 ) // In React fibre when you want to update 
      setCounter(prevCounter => prevCounter + 1 ) // prevCounter give me existing state because in setCounter has callback hidden features so here i am calling call back because he has last updated state 
      setCounter(prevCounter => prevCounter + 1 ) // Because this is not a bunch of update 
      setCounter(counter => counter + 1)
    
    // counter = counter + 1
    // if(counter <= 20){
    //   setCounter(counter) // In That case setCounter will update only single increase because of useState. In useState if you want to send update on UI or in Variables useState send it in batches because you updating same counter and repeating same work in batches 
    //   setCounter(counter)
    //   setCounter(counter)
    //   setCounter(counter)

    // }
    
    console.log("value added", counter)
  }

  const decreaseValue = () => {

    counter = counter -1
    if(counter >= 0 ){
      setCounter(counter)
    }
    

  }

  return (
    <>

    <h1>Chai aur React</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value {counter}</button>
    <br />
    <button onClick={decreaseValue}>decrease value {counter}</button>
    </>
  )
}

export default App
