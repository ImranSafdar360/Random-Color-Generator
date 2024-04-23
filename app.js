const getColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215);
    const colorCode = "#" + randomColor.toString(16);
    document.body.style.background = colorCode;
    document.querySelector("#color").innerHTML = colorCode;
    navigator.clipboard.writeText(colorCode);
}

let btn = document.querySelector("#colorGenerator");
btn.addEventListener( "click", getColor);

getColor();