  function createGrid(newGrid) {
      for(i = 0; i < newGrid; i++) { // creates 16 columns
        for(j = 0; j < newGrid; j++) { // creates 16 rows  
          div = document.createElement("div");
          div.classList.add("box");
          div.style.width = "auto";
          div.style.height = "auto";
          div.style.border = "0.5px solid blue";
          div.style.margin = "0px";
          container.appendChild(div);
        } // end for loop 
      } // end for loop
  } //creates grid of div elements
  
  function hover() {
    box.style.backgroundColor = "grey";
  } // changes the box color

  function resetGrid() {
    container.remove(box);
    newGrid = prompt("Enter a value for the number of rows and columns of the new grid");
    createGrid(newGrid);
  } // creates new Grid

  container = document.getElementById("container");
  createGrid(16);
  let box = document.querySelectorAll(".box");
  box.forEach( (box) => {
    box.addEventListener("mouseover", hover);
  });

  button = document.getElementById("reset");
  button.addEventListener("click", resetGrid);