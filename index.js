function myFunction() {
    document.getElementById('mainDiv').style.transform = "rotateY(360deg)"
}
setTimeout(function () {
    document.getElementById('cover').style.transform = "rotateX(180deg)";
    document.getElementById('imgDiv').style.top = "-400px";
    document.getElementById('imgDiv').style.transitionDelay = "1s";
    document.getElementById('cover').style.transition = "1s";
}, 1000);

setTimeout(function () {
    document.getElementById('imgDiv').style.zIndex = "1";
    document.getElementById('imgDiv').style.top = "100px";
    document.getElementById('imgDiv').style.top = "100px";
    document.getElementById('header').style.display = "block";
    document.getElementById('mainDiv').style.transform = "rotate(20deg)";
}, 3000);

setTimeout(function () {
    document.getElementById('imgDiv').style.transform = "rotate(-20deg)";
}, 3000);