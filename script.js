

let timeSecond = 360;
const timeH = document.querySelector("#countdown");
addEventListener.call
console.log(timeH)
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
  timeH.innerHTML = "Times up! No Turkey for you!";
}

let btn = document.getElementById("button")
// let output = document.getElementById("state-list") 

btn.addEventListener('#button', function(){
    let input = document.getElementById("answer-field").Value;
    let output = document.getElementById("#state-list")
    if  (input == "alabama" ||
        input == "alaska" ||
        input == "arizona"|| 
        input == "arkansas"|| 
        input == "california"|| 
        input == "colorado"|| 
        input == "connecticut"|| 
        input == "delaware"|| 
        input == "florida"||
        input == "georgia" ||
        input == "hawaii" ||
        input == "idaho"|| 
        input == "illinois"|| 
        input == "indiana"|| 
        input == "iowa"|| 
        input == "kansas"|| 
        input == "kentucky"|| 
        input == "louisiana"||
        input == "maine" ||
        input == "maryland" ||
        input == "massachusetts"|| 
        input == "michigan"|| 
        input == "minnesota"|| 
        input == "mississippi"|| 
        input == "missouri"|| 
        input == "montana"|| 
        input == "nebraska"||
        input == "nevada"||
        input == "new hampshire"||
        input == "new jersey"|| 
        input == "new mexico"|| 
        input == "new york"|| 
        input == "north carolina"|| 
        input == "north dakota"|| 
        input == "north dakota"|| 
        input == "oklahoma"||
        input == "oregon" ||
        input == "pennsylvania" ||
        input == "rhode island"|| 
        input == "south carolina"|| 
        input == "south dakota"|| 
        input == "tennessee"|| 
        input == "texas"|| 
        input == "utah"|| 
        input == "vermont"||
        input == "virginia" ||
        input == "washington" ||
        input == "west virginia"|| 
        input == "wisconsin"|| 
        input == "wyoming"||) {
          output = document.getElementByID = ("#state-list")
          console.log("<li>[input]</li>)
        }
          // output.innerHTML = "<li>" + input + "</li>"
        // }
      
//       }
//     output.getElementById("scorebox")=+1}
//     else (input =!
//       Alabama,
//         Alaska,
//         Arizona,
//         Arkansas,
//         California,
//         Colorado,
//         Connecticut,
//         Delaware,
//         Florida,
//         Georgia,
//         Hawaii,
//         Idaho,
//         Illinois,
//         Indiana,
//         Iowa,
//         Kansas,
//         Kentucky,
//         Louisiana,
//         Maine,
//         Maryland,
//         Massachusetts,
//         Michigan,
//         Minnesota,
//         Mississippi,
//         Missouri,
//         Montana, 
//         Nebraska,
//         Nevada,
//         New Hampshire,
//         New Jersey,
//         New Mexico,
//         New York,
//         North Carolina,
//         North Dakota,
//         Ohio,
//         Oklahoma,
//         Oregon,
//         Pennsylvania, 
//         Rhode Island,
//         South Carolina,
//         South Dakota,
//         Tennessee,
//         Texas,
//         Utah,
//         Vermont,
//         Virginia,
//         Washington,
//         West Virginia,
//         Wisconsin,
//         Wyoming)
//')'