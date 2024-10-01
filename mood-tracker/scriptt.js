const moodForm = document.getElementById("moodForm");
const moodSelect = document.getElementById("moodSelect");
const moodNotes = document.getElementById("moodNotes");
const moodList = document.getElementById("moodList");
const clearMoodsButton = document.getElementById("clearMood");

let moods = [];

moodForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const mood = moodSelect.value;
    const notes = moodNotes.value;

    moods.push({mood, notes});
    displayMoods();
    if(moodNotes.value == "") {
        alert("you must wright a note");
    };
    moodNotes.value = "";
});

function displayMoods() {
    moodList.innerHTML = "";
    moods.forEach((entry) => {
        const listItem = document.createElement("li")
        listItem.textContent = `${entry.mood}: ${entry.notes}`;

        switch (entry.mood) {
            case "Happy":
                listItem.style.backgroundColor = "yellow";
                break;
            case "Angry":
                listItem.style.backgroundColor = "red";
                break;
            case "Sad":
                listItem.style.backgroundColor = "lightblue";
                break;
            case "Neutral":
                listItem.style.backgroundColor = "lightgreen";
                break;
        }

        moodList.appendChild(listItem);
    });

    clearMoodsButton.addEventListener("click", () => {
        moods = [];
        displayMoods();
    });

}