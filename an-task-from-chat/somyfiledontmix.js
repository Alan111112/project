const colorChanger = document.getElementById("colorChanger");
const resetBtn = document.getElementById("resetBtn");
const color = document.getElementById("select");

document.addEventListener("change", () => {
    selectedColor = color.value;
    colorChanger.style.background = selectedColor;
});

resetBtn.addEventListener("click", () => {
    colorChanger.style.background = "white";
});