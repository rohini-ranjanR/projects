
let x;
let y;
let z;

document.getElementById("rollButton").onclick = function () {


    x = Math.floor(Math.random() * 20) + 1;
    y = Math.floor(Math.random() * 10) + 1;
    z = Math.floor(Math.random() * 5) + 1;


    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}
