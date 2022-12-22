import { createElement } from "../utils/createElement.js";
import { tabManager } from "../../main.js";


export default function Card({ name, image, display, id}) {
    const element =  createElement({
    tagName: "div",
    classList: ["card"],
    style: {
        display:display,
    },
    children: [
        {
            tagName: "img",
            classList: ["card-image"],
            attributes: {
                src: image,
                alt: name,
            },
        },
        {
            tagName: "h1",
            text: name,
            classList:['card-title'],
        },
        {
            tagName:"p",
            classList:["card-button"],
            text:"Voir le personnage",
            attributes:{
                "data-character-id":id,
            }
        }
    ]
})
    element.querySelector(".card-button").addEventListener("click", (e)=>{
        tabManager.openTabsById("character", [e.target.dataset.characterId]);
    })
    return element;
}