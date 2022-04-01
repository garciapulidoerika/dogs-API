
const getBreeds = async () => {
    const url = "https://api.thedogapi.com/v1/breeds";
    const res = await fetch(url);
    const breeds = await res.json()

    if(!res.ok){

        const {url, status, statusText } = res;
        throw Error(`Error: ${status} ${statusText} in fetch ${url}`)
    }


    return breeds;
  
}

export default getBreeds