console.log("JS Loaded!");
let boxOne = document.getElementById("one");
let boxTwo = document.getElementById("two");
let boxThree = document.getElementById("three");
let boxFour = document.getElementById("four");
let boxFive = document.getElementById("five");
let boxSix = document.getElementById("six");
let boxSeven = document.getElementById("seven");
let boxEight = document.getElementById("eight");
let boxNine = document.getElementById("nine");

function xo() {
  if (x === 1) {
    x = 0;
    return "x";
  } else {
    x = 1;
    return "o";
  }
}
let x = 1;

boxOne.addEventListener("click", function() {
  let move = xo();
  boxOne.innerHTML = move;
  winnerCheck(move);
});
boxTwo.addEventListener("click", function() {
  let move = xo();
  boxTwo.innerHTML = move;
  winnerCheck(move);
});
boxThree.addEventListener("click", function() {
  let move = xo();
  boxThree.innerHTML = move;
  winnerCheck(move);
});
boxFour.addEventListener("click", function() {
  let move = xo();
  boxFour.innerHTML = move;
  winnerCheck(move);
});
boxFive.addEventListener("click", function() {
  let move = xo();
  boxFive.innerHTML = move;
  winnerCheck(move);
});
boxSix.addEventListener("click", function() {
  let move = xo();
  boxSix.innerHTML = move;
  winnerCheck(move);
});
boxSeven.addEventListener("click", function() {
  let move = xo();
  boxSeven.innerHTML = move;
  winnerCheck(move);
});
boxEight.addEventListener("click", function() {
  let move = xo();
  boxEight.innerHTML = move;
  winnerCheck(move);
});
boxNine.addEventListener("click", function() {
  let move = xo();
  boxNine.innerHTML = move;
  winnerCheck(move);
});

function winnerCheck(move) {
  if (
    boxOne.innerHTML === move &&
    boxTwo.innerHTML === move &&
    boxThree.innerHTML === move
  ) {
    console.log("winner1");
    alert(`${move} WINS!!!`);
  } else if (
    boxFour.innerHTML === move &&
    boxFive.innerHTML === move &&
    boxSix.innerHTML === move
  ) {
    console.log("winner2");
    alert(`${move} WINS!!!`);
  } else if (
    boxSeven.innerHTML === move &&
    boxEight.innerHTML === move &&
    boxNine.innerHTML === move
  ) {
    console.log("winner3");
    alert(`${move} WINS!!!`);
  } else if (
    boxOne.innerHTML === move &&
    boxFour.innerHTML === move &&
    boxSeven.innerHTML === move
  ) {
    console.log("winner4");
    alert(`${move} WINS!!!`);
  } else if (
    boxTwo.innerHTML === move &&
    boxFive.innerHTML === move &&
    boxEight.innerHTML === move
  ) {
    console.log("winner5");
    alert(`${move} WINS!!!`);
  } else if (
    boxThree.innerHTML === move &&
    boxSix.innerHTML === move &&
    boxNine.innerHTML === move
  ) {
    console.log("winner6");
    alert(`${move} WINS!!!`);
  } else if (
    boxOne.innerHTML === move &&
    boxFive.innerHTML === move &&
    boxNine.innerHTML === move
  ) {
    console.log("winner7");
    alert(`${move} WINS!!!`);
  } else if (
    boxThree.innerHTML === move &&
    boxFive.innerHTML === move &&
    boxSeven.innerHTML === move
  ) {
    console.log("winner8");
    alert(`${move} WINS!!!`);
  }
}

const reset = document.getElementById("reset");
reset.addEventListener("click", function() {
  boxOne.innerHTML = "";
  boxTwo.innerHTML = "";
  boxThree.innerHTML = "";
  boxFour.innerHTML = "";
  boxFive.innerHTML = "";
  boxSix.innerHTML = "";
  boxSeven.innerHTML = "";
  boxEight.innerHTML = "";
  boxNine.innerHTML = "";
  console.log("anything I want to");
});
