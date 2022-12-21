import {test, expect} from "vitest";
import {createElement} from "../src/utils/createElement.js";


const tree = {
    tagName: "div",
    classList: ["card"],
}
test("createElement", () => {
    const element = createElement(tree)
    expect(element.innerHTML).toContain("Hello World");
}   
);




