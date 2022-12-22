import { createElement } from "../utils/createElement.js";

export default function Character({ id, name, status, episode, gender, image}) {
    console.log(id, name, status, episode, gender, image)
    return createElement({
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
}