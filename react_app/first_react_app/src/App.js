import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('')
  const [nameArray, setNameArray] = useState([])
  const [editingIndex, setEditingIndex] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [completedTask, setCompletedTask] = useState([])

  function clickAction(){
    if(name.trim() === ''){
    setErrorMessage("Empty task")
    return
    }
    const temNameArray = [...nameArray, name]
    setNameArray(temNameArray)
    setName('')
    setErrorMessage('')
  }

  function deleteAction(index) {
    if (index >= 0 && index < nameArray.length) {
      const newArray = [...nameArray];
      newArray.splice(index, 1); // Removes one element at the specified index
      setNameArray(newArray);
    } else {
      console.log("Invalid index");
    }
  }

  function editAction(index) {
    setEditingIndex(index)
    setName(nameArray[index])
  }

  function saveEditAction() {
    if (name.trim() === ''){
      setErrorMessage("Empty task")
      return
    }
    if (editingIndex !== null) {
      const newArray = [...nameArray];
      newArray[editingIndex] = name;
      setNameArray(newArray);
      setName('');
      setEditingIndex(null);
      setErrorMessage('')
    }
  }

  function toggleTaskCompletion(index) {
    if (completedTask.includes(index)) {
      setCompletedTask(completedTask.filter((i) => i !== index));
    } else {
      setCompletedTask([...completedTask, index]);
    }
  }

  return (
    <div className='absolute top-10 left-20'>
      <h1 className="mx-auto mb-4">To Do List</h1>
      <input type="text" placeholder='name' id='name' className='border-2 border-gray-500 rounded' value={name} onChange={(e)=> setName(e.target.value)}></input>
      {editingIndex === null ? (
        <input onClick={clickAction} className='border-gray-500 border-2 rounded m-2' type='submit' value='Add'></input>
      ) : (
        <input onClick={saveEditAction} className='border-black border-2 p-2 mb-4' type='submit' value='Save Edit'></input>
      )}
      
      {nameArray.map((item, index) => (
        <div key={index} className='flex justify-between items-center mb-4'>
          <span 
              onClick={() => toggleTaskCompletion(index)} 
              className={`cursor-pointer mr-4 ${completedTask.includes(index) ? 'text-green-500' : 'text-gray-500'}`}
            >
              &#10003;
            </span>
          <span>{item}</span>
          {editingIndex === index ? (
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='border-2 border-black p-2 ml-4'/>
          ) : (
            <>
              <button onClick={() => editAction(index)} className='bg-blue-500 text-white px-2 py-1 rounded ml-1'>Edit</button>
              <button onClick={() => deleteAction(index)} className='bg-red-500 text-white px-2 py-1 rounded '>Delete</button>
            </>
          )}
        </div>
        ))}
    </div>
  );
}

export default App;