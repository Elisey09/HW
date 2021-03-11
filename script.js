const pushResultFirst = document.getElementById("firstButton");
const pushResultSecond = document.getElementById("secondButton");
const pushResultThird = document.getElementById("thirdButton");
const spanTempleteFirstEl = document.getElementById("templateFirst");
const spanTempleteSecondEl = document.getElementById("templateSecond");
const spanTempleteThirdEl = document.getElementById("templateThird");

pushResultFirst.addEventListener("click", pushResult(spanTempleteFirstEl));
pushResultSecond.addEventListener("click", pushResult(spanTempleteSecondEl));
pushResultThird.addEventListener("click", pushResult(spanTempleteThirdEl));

function pushResult(number) {
  let prev = 0;
  let next = 1;
  return function fib() {
    next = prev + next;
    prev = next - prev;
    let result = (number.textContent = `Fibonacci number: ${prev}`);
    return result;
  };
}

function culc(e) {
    let a = 0;
    let b = 1;
    return () => {
        a = a + b;
        b = a - b;
    }
}

