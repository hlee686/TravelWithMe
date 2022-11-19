import './App.css';
import {useState} from "react";
import data from "./data.js"
import List from "./List.js"

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people}/>
        <button onClick={()=>{
          setPeople([])
        }}>Clear All</button>
      </section>
    </main>
  )
}
export default App;
