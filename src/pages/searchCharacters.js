import Card from "../components/Card";

const searchCharacters = async ()=>{
    const request = await fetch("https://rickandmortyapi.com/api/character");
    const response = await request.json();

    const div = document.createElement("div");
    div.classList.add("listOfCards");
    const cards = response.results.map(character => Card(character));
    cards.forEach(card => {div.appendChild(card)});

    return div;
}

export default searchCharacters;