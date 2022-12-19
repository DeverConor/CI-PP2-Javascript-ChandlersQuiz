

let timeSecond = 360;
const timeH = document.querySelector("h3");

displayTime(timeSecond);

const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond == 0 || timeSecond < 1) {
    endCount();
    clearInterval(countDown);
  }
}, 1000);

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
}

function endCount() {
  timeH.innerHTML = "Times up";
}

let btn = document.getElementById("button")
let output = document.getElementById("state-list")

btn.addEventListener('click', function(){
    let input = document.getElementById("answer-field").Value;
    if (input == 
        Alabama,
        Alaska,
        Arizona,
        Arkansas,
        California,
        Colorado,
        Connecticut,
        Delaware,
        Florida,
        Georgia,
        Hawaii,
        Idaho,
        Illinois,
        Indiana,
        Iowa,
        Kansas,
        Kentucky,
        Louisiana,
        Maine,
        Maryland,
        Massachusetts,
        Michigan,
        Minnesota,
        Mississippi,
        Missouri,
        Montana, Nebraska
        Nevada,
        New Hampshire,
        New Jersey,
        New Mexico,
        New York,
        North Carolina,
        North Dakota,
        Ohio,
        Oklahoma,
        Oregon,
        Pennsylvania, Rhode Island
        South Carolina,
        South Dakota,
        Tennessee,
        Texas,
        Utah,
        Vermont,
        Virginia,
        Washington,
        West Virginia,
        Wisconsin,
        Wyoming) {output.innerHTML.getElementById("state-list") = "userInput"
    output.getElementById("scorebox")=+1}
}