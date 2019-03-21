  function createGrid(num) {
    let boxSize = (400/num);
    let grid = num * num;
      for(i = 0; i < grid; i++) {
        div = document.createElement("div");
        div.classList.add("box");
        div.style.width = `${boxSize}px`;
        div.style.height = `${boxSize}px`;
        container.appendChild(div);
      } // end for loop 
    changeRandomColor();
  } //creates grid of div elements
  
  function removeGrid() {
	  let boxes = document.querySelectorAll('.box');
		boxes.forEach((box) => {
			box.parentNode.removeChild(box);
	  });
  } // deletes old Grid

  function changeColor() {
    let box = document.querySelectorAll(".box");
    box.forEach((box) => {
      box.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "grey";
      });
    });
  } // changes the color of the boxes

  function changeRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for(i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    } //end for loop
    let box = document.querySelectorAll(".box");
    
    box.forEach((box) => {
      box.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = color;
      });
    });
  } // gives boxes random colors

  const container = document.getElementById("container");
  let box = document.querySelectorAll(".box");
  let reset = document.getElementById("reset");
  
  reset.addEventListener("click", (e) =>{
    removeGrid();
    newGrid = prompt("Enter a value for the number of rows and columns of the new grid");
    newGrid = parseInt(newGrid);
    createGrid(newGrid);
  }); // removes old grid and creates new one

  
