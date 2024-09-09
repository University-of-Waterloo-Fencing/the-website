const PATH = "/the-website/assets/imgs/carousel/"
var target = document.getElementById("carousel");

const num = 6;
var i = 1;

setInterval(() => {
    target.src = `${PATH}c${i}.png`;
    i = (i + 1) % num;
}, 5000);
