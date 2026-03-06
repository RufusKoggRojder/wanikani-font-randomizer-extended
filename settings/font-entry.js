import { getAllFonts } from "../content.js";

const fonts = await getAllFonts();
const list = document.querySelector(".font-pool ul");

for (const font of fonts) {
    const listItem = document.createElement("li");
    listItem.style.listStyle = "none";
    listItem.style.marginBottom = "0.5rem";
    listItem.style.display = "flex";
    listItem.style.alignItems = "center";
    listItem.style.justifyContent = "space-between";

    const label = document.createElement("label");

    label.appendChild(document.createTextNode(`${font}`));

    const preview = document.createElement("div");
    preview.textContent = "古池や 蛙飛び込む 水の音";
    preview.style.fontFamily = font;
    preview.style.marginLeft = "1.5rem";

    listItem.appendChild(label);
    listItem.appendChild(preview);
    list.appendChild(listItem);
}

