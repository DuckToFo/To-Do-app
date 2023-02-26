import './App.css';
import {useState} from 'react'

function App() {
  const [isChosen, setIsChosen] = useState("All");
  const [input, setInput] = useState("");
  const [items, setItems] = useState(["Example"]);
  const [activeItems, setActiveItems] = useState(["Active Items"]);
  const [completedItems, setCompletedItems] = useState(["Completed Items"]);
  const [isChecked, setIsChecked] = useState(false);
  const handleAdd = (event) => {
    event.preventDefault()
    console.log(input)
    setItems(prev => {return [...prev, input]})
    setActiveItems(prev => {return [...prev, input]})
    console.log(items)
    setInput("")
  }
  
  const handleAddChange = (event) => {
    setInput(event.target.value)
  }

  const handleCheck = (input) => {
    setIsChecked(prev => !prev)
    !isChecked && setCompletedItems(prev => {return [...prev, input]})
    const updatedActiveItems = activeItems.filter(i => i !== input)
    !isChecked && setActiveItems(updatedActiveItems)
  }

  let content = 
    <div className='container'>
      <div className="inputbar">
          <form onSubmit={handleAdd}>
            <input className="input" type="text" placeholder='add details' value={input} onChange={handleAddChange}></input>
            <button id="add-button" type='submit'>Add</button>
          </form>
      </div>
        {items.map(i => {return (
          <div className='checklist'>
            <input type="checkbox" key={i} onClick={() => {handleCheck(i); console.log("done"); }}></input>
            <div>{i}</div>
          </div>  
        )})}
    </div>
  if (isChosen === "Active") {
    content = <div className='container'>
    <div className="inputbar">
        <form onSubmit={handleAdd}>
          <input className="input" type="text" placeholder='add details' value={input} onChange={handleAddChange}></input>
          <button id="add-button" type='submit'>Add</button>
        </form>
    </div>
      {activeItems.map(i => {return (
        <div className='checklist'>
          <input type="checkbox" key={i} onClick={() => {handleCheck(i); console.log("done"); }}></input>
          <div>{i}</div>
        </div>  
      )})}
  </div>
  } else if (isChosen === "Completed") {
    content = 
    <div>
      {completedItems.map(i => {return (
        <div className='checklist'>
          <input type="checkbox" key={i} value={isChecked}></input>
          <div>{i}</div>
          <button type='button'></button>
        </div>  
      )})}
      <button type='button' ></button>
  </div>
  }

  return (
    <div className="App">
      <header className="title">#todo</header>
        <div className="navbar">
          <button className="button" onClick={() => {setIsChosen("All")}}>All</button>
          <button className="button" onClick={() => {setIsChosen("Active")}}>Active</button>
          <button className="button" onClick={() => {setIsChosen("Completed")}}>Completed</button>
        </div>
        {content}
    </div>
  );
}

export default App;
