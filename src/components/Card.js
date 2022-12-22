import { createElement } from "../utils/createElement.js";

export default function Card({ name, image, display, id}) {
    return createElement({
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
            id:"character-"+id,
        }
    ]
})}