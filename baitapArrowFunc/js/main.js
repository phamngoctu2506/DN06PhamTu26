


let MauHouse = () => {
    const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];
    let colorHouse = "";
    for (let i = 0; i < colorList.length; i++) {
        colorHouse += `<button onclick="changeColor('${colorList[i]}')" class="color-button ${colorList[i]}" ></button>`     
    }
    document.getElementById('colorContainer').innerHTML = colorHouse;
}
MauHouse();

let changeColor = (i) => {
    document.querySelector(".house").className = `house ${i}`;
}