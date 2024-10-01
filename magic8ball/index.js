const answers = [
    "Yes", "No", "Maybe", "Ask again later", "Definitely", "I don't think so", "Absolutely", "Not sure"
]

function shakeBall(){
    const question = document.getElementById("question").value;
    if (question.trim() === ""){
        alert("ask a question");
        return;
    }
    if (question.toLowerCase() === "muhammad"){
        document.getElementById("answer").innerText = "Welcom, master";
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * answers.length);
    const answer = answers[randomIndex];
    document.getElementById("answer").innerText = answer;

}

document.getElementById("question").addEventListener("keydown", event => {
    if(event.key === "Enter"){
        shakeBall();
    }
});

function nextProject() {
    window.location.href = '/project/project.html';
  }
