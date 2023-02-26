const boxes = document.querySelectorAll(".box");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");
console.log(boxes);
let counter = 0;
boxes.forEach((box) => {
    box.addEventListener("click", putMark);
})

function putMark(event) {
    if (!event.target.innerText) {
        if (counter % 2 === 0) {
            event.target.innerText = "X";
            counter++;
        } else {
            event.target.innerText = "O";
            counter++;
        }
    }
    if ((box1.innerText === "X" && box2.innerText === "X" && box3.innerText === "X") ||
        (box4.innerText === "X" && box5.innerText === "X" && box6.innerText === "X") ||
        (box7.innerText === "X" && box8.innerText === "X" && box9.innerText === "X") ||
        (box1.innerText === "X" && box4.innerText === "X" && box7.innerText === "X") ||
        (box2.innerText === "X" && box5.innerText === "X" && box8.innerText === "X") ||
        (box3.innerText === "X" && box6.innerText === "X" && box9.innerText === "X") ||
        (box1.innerText === "X" && box5.innerText === "X" && box9.innerText === "X") ||
        (box3.innerText === "X" && box5.innerText === "X" && box7.innerText === "X")) {
        console.log("Player 1 won!");
    }
    else if ((box1.innerText === "O" && box2.innerText === "O" && box3.innerText === "O") ||
        (box4.innerText === "O" && box5.innerText === "O" && box6.innerText === "O") ||
        (box7.innerText === "O" && box8.innerText === "O" && box9.innerText === "O") ||
        (box1.innerText === "O" && box4.innerText === "O" && box7.innerText === "O") ||
        (box2.innerText === "O" && box5.innerText === "O" && box8.innerText === "O") ||
        (box3.innerText === "O" && box6.innerText === "O" && box9.innerText === "O") ||
        (box1.innerText === "O" && box5.innerText === "O" && box9.innerText === "O") ||
        (box3.innerText === "O" && box5.innerText === "O" && box7.innerText === "O")) {
        console.log("Player 2 won!");
    }
}

