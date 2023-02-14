let counthome = 0
let countaway = 0

let sumHome = document.getElementById("scoreboardhome")
let sumAway = document.getElementById("scoreboardaway")

function add1h() {
    counthome += 1
    sumHome.textContent = counthome
}

function add2h(){
    counthome += 2
    sumHome.textContent = counthome
}

function add3h(){
    counthome += 3
    sumHome.textContent = counthome
}

function add1a() {
    countaway += 1
    sumAway.textContent = countaway
}

function add2a() {
    countaway += 2
    sumAway.textContent = countaway
}

function add3a() {
    countaway += 3
    sumAway.textContent = countaway
}

function reseth(){
    counthome = 0
    sumHome.textContent = counthome
}

function reseta(){
    countaway = 0
    sumAway.textContent = countaway
}


