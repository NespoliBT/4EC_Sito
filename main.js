const upgrade = document.querySelector("#upgrade");
const score = document.querySelector("#score");
let scoreValue = 0;
let upgradeIntervalBought = true;

upgrade.addEventListener("click", () => {
  // compro upgrade se ho abbastanza punti
  if (scoreValue >= 20) {
    scoreValue -= 20;
    upgradeIntervalBought = true;
  }
});

// addEventListener, cambiare le classe (classList), setInterval, innerHTML
upgrade.classList.remove("comprato");
upgrade.classList.add("comprato");
upgrade.classList.toggle("comprato");
upgrade.innerHTML = "upgrade";

// ogni 1000 millisecondi faccio qualcosa
setInterval(() => {
  if (upgradeIntervalBought) {
    scoreValue += 1;
    score.innerHTML = scoreValue;
  }
}, 1000);

setTimeout(() => {
  console.log("Vengo eseguito dopo 1 secondo (1000 millisecondi)");
}, 1000);
