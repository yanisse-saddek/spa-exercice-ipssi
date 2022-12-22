import { createElement } from "../utils/createElement.js";

export default function Navbar(loadArticle) {
    return createElement({
        tagName: "nav",
        classList: ["navbar"],
        children: [
                    {
                        tagName: "p",
                        classList: ["navbar-item", "home"],
                        text:"Accueil",
                        // id: "home",
                    },
                    {

                        tagName: "p",
                        classList: ["navbar-item"],
                        text: "Articles",
                        id: "articles",
                    }],
    });
}