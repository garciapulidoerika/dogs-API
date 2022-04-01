
import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Select from './components/Select';
import getDog from './components/helpers/getDog';
import Error from './components/Error';

const initialDog = {
  
}

function App() {

  const [dog, setdog] = useState(initialDog)
  const [loader, setloader] = useState(false)
  const [error, setError] = useState(null)

  const updateDog = (breedId) => {
    setloader(true)
    getDog(breedId)
    .then((newDog)=> {
      setdog(newDog);
      setloader(false)
    })
    .catch((error)=>{
      console.log(error);
      setError('error al cargar perro')
      setloader(false)
    })
  }

  useEffect(() => {
   updateDog()
  }, [])
  

  return (
    <div className="app">
      <Select updateDog={updateDog}/>
      <Card dog={dog} updateDog={updateDog} loader={loader}/>
      {error ? <Error error={error}/> : null }
     
    </div>
  );
}

export default App;
