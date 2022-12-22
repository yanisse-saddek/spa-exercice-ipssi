import { createElement } from "../utils/createElement";

export default function NotFound(){
    return createElement({
        tagName:"div",
        classList:["alert"],
        children:[
            {
                tagName:"h1",
                text:"Erreur",
            },
            {
                tagName:"p",
                text:"Aucun résultat",
            },
        ]
    })
}