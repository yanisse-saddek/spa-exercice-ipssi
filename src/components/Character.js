import { createElement } from "../utils/createElement.js";
import { tabManager } from "../../main.js";

export default function Character({ id, name, status, episode, gender, image}) {
    const element =  createElement({
    tagName: "div",
    classList: ["card"],
    children: [
        {
            tagName: "img",
            classList: ["card-image"],
            attributes: {
                src: image || "https://picsum.photos/200",
                alt: name,
            },
        },
        {
            tagName: "h1",
            text: name || '',
            classList:['card-title'],
        },
        {
            tagName: "p",
            classList: ["content"],
            text: "Nombre d'épisodes: " + episode.length,
        },
        {
            tagName: "p",
            classList: ["content"],
            text: "Statut: "+status,
        },
        {
            tagName: "p",
            classList: ["content"],
            text: "Genre: "+gender,
        },
        {
            tagName:"p",
            classList:["card-button"],
            text:"Retour à la liste",
        }
    ]
})
    element.querySelector(".card-button").addEventListener("click", (e)=>{
        tabManager.openTabsById("home");
    })
    return element;
}