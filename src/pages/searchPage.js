import Card from '../components/Card';
import SearchBar from "../components/SearchBar";

const searchPage = async (params) =>{
    const div = document.createElement("div");
    div.classList.add("searchPage");
    div.appendChild(SearchBar());

    if(params.length){
        const request = await fetch(`https://rickandmortyapi.com/api/character/?name=${params}`);
        const data = await request.json();

        const filteredData = data.results.filter(character => character.name.toLowerCase().includes(params.toLowerCase()));

        const listOfCards = document.createElement("div");
        listOfCards.classList.add("listOfCards");
        div.appendChild(listOfCards);
        filteredData.forEach(character => {
            listOfCards.appendChild(Card(character));
        })
    }

    return div;

}

export default searchPage;