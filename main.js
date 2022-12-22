import './style.css'
import Card from "./src/components/Card";
import Navbar from "./src/components/Navbar";
import Character from "./src/components/Character";

let actualElements = [];
document.querySelector("#app").appendChild(Navbar());


function refreshPages(){
    pages.map(page=>{
        console.log(page.selector);
        document.querySelector(`${page.selector}`).addEventListener("click", (evt) => {
            if(!actualElements.includes(page.element)){
                    page.load(evt);
                    unshowElements(page.element);
            }
        });
    });
}

const unshowElements = (showid) => {
    actualElements.map(element=>{        
        document.querySelector(`#${element}`).remove();
        actualElements = actualElements.filter(e => e !== element);
    })
    document.querySelector(`#${showid}`).style.display = "flex";
}

const loadCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    
    const users = document.createElement("div");
    users.classList.add("card-list");
    users.id = "characters-list";
    document.querySelector("#app").appendChild(users);

    if(!actualElements.includes(users.id)){
        actualElements.push(users.id)
    }

        data.results.forEach(data => {
            pages.push({
                selector: "#character-"+data.id,
                load: loadCharacter,
                element: "character-"+data.id,
            })
            return document.querySelector("#characters-list").appendChild(Card(data));
     });

    refreshPages();
}



const fetchArticles = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    const article = document.createElement("div");
    article.classList.add("card-list");
    article.id = "articles-list";
    document.querySelector("#app").appendChild(article);
    
    if(!actualElements.includes(article.id)){
        actualElements.push(article.id)
    }

    data.map(data=>{
        return document.querySelector("#articles-list").appendChild(Card({
            title: data.title,
            description: data.body,
            image: "https://picsum.photos/200",
            display: "flex",
        }));    
    })
}

const loadCharacter = async (evt)=>{
    const id = evt.target.id.split("-")[1];
    let request = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    request = await request.json();

    const character = document.createElement("div");
    character.classList.add("character");

    if(document.querySelector("#character-show")){
        document.querySelector("#character-show").remove();
    }

    character.id = "character-show";
    document.querySelector("#app").appendChild(character);

    if(!actualElements.includes(character.id)){
        actualElements.push(character.id)
    }
            
    document.querySelector("#character-show").appendChild(Character(request));    
}

let pages = [
    {
        selector: ".home",
        load: loadCharacters,
        element: "characters-list",
    },
    {
        selector: "#articles",
        load: fetchArticles,
        element: "articles-list",
    },
]



loadCharacters();
