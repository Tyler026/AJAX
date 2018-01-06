// AJAX Hands On

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    // Checks The Status & Contains An If Statement 
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("DOM").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "info.txt", true);
    xhttp.send();
}