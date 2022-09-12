const erÅpentEl = document.getElementById("erÅpent");
let dag = new Date().getDay();
let tid = new Date().getHours();
let åpent = false

if (dag < 6) {
    if (dag == 5) {
        if (tid >= 10 && tid <= 16) {
            setÅpent()
        }
    }
    else if (tid >= 10 && tid <= 17) {
        setÅpent()
    }
}

function setÅpent() {
    const erÅpentEl = document.getElementById("erÅpent");
    erÅpentEl.innerHTML = "Cafeen er åpen"
}