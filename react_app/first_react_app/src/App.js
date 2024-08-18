import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('')
  const [nameArray, setNameArray] = useState([])
  function clickAction(){
      const temNameArray = [...nameArray, name]
      setNameArray(temNameArray)
      setName('')
  }
  function deleteAction(arr, index){
    if (index >= 0 && index <= arr.length) {
        const newArray = arr.splice(index, 1); // Removes one element at the specified index
        console.log('newArray', newArray)
        setNameArray(newArray)
    } else {
        console.log("Invalid index");
    }
    
  }
  // console.log('name', name, nameArray)
   return (
    <div>
      <input type="text" placeholder='name' id='name' value={name}
      onChange={(e)=> setName(e.target.value)}
      ></input>
      <input onClick={clickAction} type='submit'></input>
      {nameArray?.map((item, index)=>(
        <div onClick={()=>deleteAction(nameArray,index+1)}>{item}</div>
      ))}
    </div>
  );
}

export default App;
