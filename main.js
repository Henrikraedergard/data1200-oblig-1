let dag = new Date().getDay();
let tid = new Date().getHours();
let åpent = false

console.log(dag, tid);

if (dag > 0) {
    if (dag == 6) {
        if (tid >= 10 && tid < 17){
        }
    }
    else if (tid > 10 && tid < 16) {
        setÅpent()
    }
}

function setÅpent() {
    const erÅpentEl = document.getElementById("erÅpent");
    erÅpentEl.innerHTML = "Cafeen er <span title='Vi bruker din maskins lokal tid til å sjekke om cafeen er åpen' style='color: green;'>åpen</span"
    console.log(erÅpentEl);
}