const nouveau = document.querySelector(".nouveau");
const lance = document.querySelector(".lance");
const passe = document.querySelector(".passe");
const De = document.querySelector(".De");
const ran1 = document.querySelector("#ran1");
const ran2 = document.querySelector("#ran2");
const scr1 = document.querySelector("#scr1");
const scr2 = document.querySelector("#scr2");
const us1 = document.querySelector("#us1");
const us2 = document.querySelector("#us2");
const win = document.querySelector(".win");
const win1 = document.querySelector("#win1");
const win2 = document.querySelector("#win2");

let random = 0;
let som1 = 0;
let som2 = 0;
let usr1IsPlaying = true;
us1.style.color = "red";

lance.addEventListener("click", lanceFunction);
passe.addEventListener("click", passeFunction);
nouveau.addEventListener("click", nouveauFunction);

function lanceFunction() {
    random = Math.ceil(Math.random() * 6);
    De.setAttribute("src", `imgs/${random}.svg`);
    De.style.display = "block";
    if (som1 >= 100) {
        win1.style.display = "inline";
    }
    else if (som2 >= 100) {
        win2.style.display = "inline";
    }
    else {
        if (usr1IsPlaying) {
            us1.style.color = "red";
            us2.style.color = "black";
            ran1.textContent = random;
            if (random == 1) {
                som1 = 0;
                usr1IsPlaying = false;
            }
            else
                som1 += random;
            scr1.textContent = som1;
        }
        else {
            us1.style.color = "black";
            us2.style.color = "red";
            ran2.textContent = random;
            if (random == 1) {
                som2 = 0;
                usr1IsPlaying = true;
            }
            else
                som2 += random;
            scr2.textContent = som2;
        }
    }

}

function passeFunction() {
    usr1IsPlaying = !usr1IsPlaying;
}

function nouveauFunction() {
    som1 = 0;
    som2 = 0;
    usr1IsPlaying = true;
    scr1.textContent = som1;
    scr2.textContent = som2;
    ran1.textContent = '';
    ran2.textContent = '';
    win.style.display = "none";
    us1.style.color = "red";
    us2.style.color = "black";
    De.style.display = "none";
}