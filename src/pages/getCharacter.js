import Character from "../components/Character";


const getCharacter = async (params)=>{
    console.log(params)
    const request = await fetch(`https://rickandmortyapi.com/api/character/${params}`);
    const data = await request.json()
    
    const div = document.createElement("div");
    div.classList.add("listOfCards");
    div.appendChild(Character(data));

    return div;
}


export default getCharacter;