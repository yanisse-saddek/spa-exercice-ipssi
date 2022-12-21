import { createElement } from "../utils/createElement.js";

export default function Navbar() {
    return createElement({
        tagName: "nav",
        classList: ["navbar"],
        children: [
                    {
                        tagName: "a",
                        classList: ["navbar-item"],
                        text:"Accueil",
                        attributes: {
                            href: "/",
                        },
                    },
                    {

                        tagName: "a",
                        classList: ["navbar-item"],
                        text: "Articles",
                        attributes: {
                            href: "/articles",
                        },
                    }],
    });
}