import './App.css';
import {useState} from 'react'

function App() {
  const [isChosen, setIsChosen] = useState("All");
  const [input, setInput] = useState("");
  const [items, setItems] = useState(["Example"]);
  const handleAdd = (event) => {
    event.preventDefault()
    console.log(input)
    setItems(prev => {return [...prev, input]})
    console.log(items)
    setInput("")
  }
  
  const handleAddChange = (event) => {
    setInput(event.target.value)
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
            <input type="checkbox"></input>
            <div>{i}</div>
          </div>  
        )})}
    </div>
  if (isChosen === "Active") {
    content = null
  } else if (isChosen === "Completed") {
    content = <div>
      bruh
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
