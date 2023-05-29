import AnimalShow from "./Animalshow";
import { useState } from 'react';
 
function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
}

console.log(getRandomAnimal());

function App() {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
    
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key = {index} />
  })
  
  return (
    <div className="App">
      <button onClick={handleClick}>Add Animal</button>
      <div>Added animal is : {animals + " , "}</div>
    </div>
    
  );
}

export default App;
