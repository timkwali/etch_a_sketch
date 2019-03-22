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
    changeColor();
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
    let box = document.querySelectorAll(".box");
    box.forEach((box) => {
      box.addEventListener("mouseover", rainbow);
    });
  } // gives boxes random colors

  function rainbow() {
    let alpha = "0123456789ABCDEF";
    let color = "#";
      for(i = 0; i < 6; i++) {
        color += alpha[Math.floor(Math.random() * 16)];
      } //end for loop
    this.style.backgroundColor = color;
  } // creates diffent background colors

  function darken() {
    let box = document.querySelectorAll(".box");
    box.forEach( (box) => {
      box.style.backgroundColor = "black";
      box.style.opacity = 0;
      box.addEventListener("mouseover", makeDarker);
    });
  } // darken background color of squares

  function makeDarker() {
    let opacity = this.style.opacity;
    if(opacity < 1) {
     opacity = parseFloat(opacity) + 0.1;
      this.style.opacity = opacity;
    }
      
      return opacity;
  } // makes squares 10% darker


  const container = document.getElementById("container");
  let box = document.querySelectorAll(".box");
  let reset = document.getElementById("reset");
  let colors = document.getElementById("colors");
  let normal = document.getElementById("normal");
  let dark = document.getElementById("darken");
  
  reset.addEventListener("click", (e) =>{
    removeGrid();
     var newGrid = prompt("Enter a value between 0 and 101 for the number of rows and columns of the new grid");
    newGrid = parseInt(newGrid);
    createGrid(newGrid);
  }); // removes old grid and creates new one

  colors.addEventListener("click", changeRandomColor);

  normal.addEventListener("click", changeColor);

  dark.addEventListener("click", darken);

  
