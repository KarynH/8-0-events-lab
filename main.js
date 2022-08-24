// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  debugger
  main.append(div);
}

// You may write your code here!


const colors= document.querySelectorAll(".color")
for (const color of colors) {
  color.addEventListener("click", (event) => {
    //debugger
    const newColor = event.target.style.backgroundColor
    const currentColor = document.querySelector("#current-color")
    currentColor.style.backgroundColor = newColor
  })
}

const cells = document.querySelectorAll(".cell")
for(const cell of cells) {
  cell.addEventListener("click",(event) => {
  const currentColor = document.querySelector("#current-color")
  const newColor = currentColor.style.backgroundColor
  event.target.style.backgroundColor = newColor
  } )
}





// const palette = document.querySelectorAll("palette")
// palette.addEventListener("click", () => {
//   currentC
// })