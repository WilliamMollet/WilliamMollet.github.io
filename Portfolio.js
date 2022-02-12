var text_slam = document.querySelector("#SLAM");
var text_sisr = document.querySelector("#SISR");
var text_cyber = document.querySelector("#CYBER");

function Slam() {
    if (text_slam.style.display === "block") {
        text_slam.style.display = "none";
    } else {
        text_slam.style.display = "block";
    }
    text_sisr.style.display = "none"
    text_cyber.style.display = "none"
}

function SISR() {
    if (text_sisr.style.display === "block") {
        text_sisr.style.display = "none";
    } else {
        text_sisr.style.display = "block";
    }
    text_slam.style.display = "none"
    text_cyber.style.display = "none"
}

function Cyber() {
    if (text_cyber.style.display === "block") {
        text_cyber.style.display = "none";
    } else {
        text_cyber.style.display = "block";
    }
    text_sisr.style.display = "none"
    text_slam.style.display = "none"
}

function mail() {
    navigator.clipboard.writeText("williammdev@gmail.com");
    document.querySelector("#mail").innerText = "Copié!"
    setTimeout(reset_mail,2000)
}

function reset_mail(){
    document.querySelector("#mail").innerText = "E-Mail"
}

