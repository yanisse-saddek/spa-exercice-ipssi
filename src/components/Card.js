import { createBulkElement, createElement } from "../utils/createElement.js";

export default function Card({ title, description, image }) {
    return createElement({
    tagName: "div",
    classList: ["card"],
    children: [
        {
            tagName: "img",
            classList: ["card-image"],
            attributes: {
                src: image,
                alt: title,
            },
        },
        {
            tagName: "h1",
            text: title,
            classList:['card-title'],
        },
        {
            tagName: "p",
            classList: ["content"],
            text: description,
        },
    ]
})}