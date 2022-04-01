import React, {useState, useEffect} from 'react'
import getBreeds from './helpers/getBreeds'
import Error from './Error'

const initialBreeds = [
    {
        id: 1,
        name: 'boxer',
    },
    {
        id: 2,
        name: 'husky',
    }
]

const Select = ({updateDog}) => {

    const [breeds, setBreeds] = useState(initialBreeds);
    const [error, setError] = useState(null);

    useEffect(() => {
        updateBreeds()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateBreeds = () => {
        getBreeds()
        .then((newBreeds) => {
            setBreeds(newBreeds)
        })
        .catch(() => {
            console.log(error);
            setError('Error al cargar las razas')
        })
    }

  return (
      <>
        <select onChange={(e) => updateDog(e.target.value)}>
            {breeds.map(breed => (
                <option value={breed.id} key={breed.id}>{breed.name}</option>
            ))
            }
        </select>
        {error ? <Error error={error}/> : null }
        
    </>
  )
}

export default Select