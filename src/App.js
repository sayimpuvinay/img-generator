import AnimalShow from "./Animalshow";
import { useState } from 'react';
 

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }


  
  return (
    <div className="App">
      <button onClick={handleClick}>Add Animal</button>
      <div>Number of {AnimalShow} : {count}</div>
    </div>
  );
}

export default App;
