
const getDog = async(breedId) => {

    const url = !breedId || breedId === 0
    ? "https://api.thedogapi.com/v1/images/search"
    : "https://api.TheDogAPI.com/v1/images/search?breed_ids=" + breedId
   
    const res = await fetch(url);

    if(!res.ok){

        const {url, status, statusText } = res;
        throw Error(`Error: ${status} ${statusText} in fetch ${url}`)
    }

    
    const [data] = await res.json()  // posicion cero de arreglo

    let {url:image , breeds:[breed] } = data;  // posicion cero de arreglo

    if(!breed) {
        breed = {
            id: 0,
            name: 'random'
        }
    }

    const dog = {
        image,  //image: image,  esto se puede simplificar
        breed,
    }


    return dog;
  
}

export default getDog