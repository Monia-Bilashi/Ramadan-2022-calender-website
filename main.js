//alert("who are you?");

// Set Clock 
setInterval(myTimer, 1000);

function myTimer() {
    const d = new Date();
    document.getElementById("date").innerHTML = d.toLocaleTimeString();
}

// for toggle menu for responsive 
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}