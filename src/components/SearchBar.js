import { createElement } from "../utils/createElement.js";
import { tabManager } from "../../main.js";

export default function SearchBar() {
    const element =  createElement({
        tagName: "div",
        classList: ["searchbar"],
        children: [
            {
                tagName: "input",
                classList: ["searchbar-input"],
                attributes: {
                    type: "text",
                    placeholder: "Rechercher un personnage",
                },
                id: "searchbar-input",
            },
            {
                tagName: "p",
                classList: ["card-button"],
                text: "Rechercher",
            },
        ],
    }); 

    element.querySelector(".card-button").addEventListener("click", (e)=>{
        tabManager.openTabsById("search", [document.querySelector("#searchbar-input").value]);
    })

    return element;
}