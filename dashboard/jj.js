/*window.onload = function() {
    setInterval(function() {
        var date = new Date();
        var displayDate = date.toLocaleDateString();
        var displayTime = date.toLocaleTimeString();

        let greet;

        if (displayTime < 12){
            greet = "Good Morning";
        }else if (timee >= 12 && timee < 17){
            greet = "Good Afternoon";
        }else (timee >= 17 && timee < 24){
            greet = "Good Evening"
        }
        
    document.getElementById("datetime").innerHTML = displayDate + " : " + displayTime;

    }, 1000);
    
}
*/
window.onload = function() {
    setInterval(function() {
        var date = new Date();
        var displayDate = date.toLocaleDateString();
        var displayTime = date.toLocaleTimeString();

        let greet;
        var hours = date.getHours(); // Get the current hour

        if (hours < 12) {
            greet = "Good Morning";
        } else if (hours >= 12 && hours < 17) {
            greet = "Good Afternoon";
        } else if (hours >= 17 && hours < 24) {
            greet = "Good Evening";
        }

        document.getElementById("datetime").innerHTML = displayDate + " : " + displayTime;
        document.getElementById("greeting").innerHTML = greet;

    }, 10);
};


function addtask() {
    const taskinput = document.getElementById("taskinput");
    const tasklist = document.getElementById("tasklist");

        if(taskinput.value.trim() !== ""){
            const li = document.createElement("li");
            li.innerHTML = taskinput.value  + ' <button class="remove-btn">X</button>';
            
            li.querySelector('.remove-btn').addEventListener('click', () => {
                tasklist.removeChild(li);
            })


        li.addEventListener('click', () => {
            li.classList.toggle("complete");
        });

        tasklist.appendChild(li);
        taskinput.value = "";
    }else{
        alert("you must write something!!");
    };


}
let taskinput = document.getElementById("taskinput");
taskinput.addEventListener('keypress', function (event){
    if (event.key === "Enter"){
        addtask();
    }
   });