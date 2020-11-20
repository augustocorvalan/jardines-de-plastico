// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Game of Life
// Video: https://youtu.be/FWSR_7kZuYg


const FRAME_RATE = 2
const COLS = 16 
const ROWS = 60 
const IMAGES = []
const TOTAL_FLOWERS = 5
const BG_COLOR = "#fff"

let grid;
let cols;
let rows;
let resolution = 12;
let generation = 0;

class Garden {
    constructor(cols, rows, resolution) {
        this.cols = cols;
        this.rows = ros;
        this.resolution = resolution;
        this.grid = resetGrid(cols, rows)
    }

    draw() {
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
                let x = i * this.resolution;
                let y = j * this.resolution;
                if (this.grid[i][j] == 1) {
                    drawFlowers(x, y)
                    // drawSanity(x, y)
                }
            }
        }
    }

    nextState() {
        let next = make2DArray(this.cols, this.rows);

        // Compute next based on grid
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
                let state = this.grid[i][j];
                // Count live neighbors!
                let sum = 0;
                let neighbors = countNeighbors(this.grid, i, j);

                if (state == 0 && neighbors == 3) {
                    next[i][j] = 1;
                } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
                    next[i][j] = 0;
                } else {
                    next[i][j] = state;
                }
            }
        }

        this.grid = next;
    }
}

function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}


function preload() {
    for (var i=1; i <= TOTAL_FLOWERS; i++) {
        IMAGES.push(
            loadImage(`/assets/flowers/${i}.png`)
        )
    }
}

function setup() {
  const canvas = createCanvas(600, 1200);
  frameRate(FRAME_RATE)
  // cols = width / resolution;
  // rows = height / resolution;
  cols = COLS
  rows = ROWS
  resetGrid()
}


function draw() {
  background(BG_COLOR);

  push()
  translate(width/4 - resolution/2, 0)
  for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let x = i * resolution;
          let y = j * resolution;
          if (grid[i][j] == 1) {
            drawFlowers(x, y)
            // drawSanity(x, y)
          }
        }
    }
pop()

let next = make2DArray(cols, rows);

  // Compute next based on grid
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
          let state = grid[i][j];
          // Count live neighbors!
          let sum = 0;
          let neighbors = countNeighbors(grid, i, j);

          if (state == 0 && neighbors == 3) {
            next[i][j] = 1;
        } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
            next[i][j] = 0;
        } else {
            next[i][j] = state;
        }
    }
}

grid = next;
}



function resetGrid(cols, rows) {
    const grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = floor(random(2));
        }
    }
    return grid
}

function drawFlowers(x, y) {
    image(IMAGES[0], x, y, resolution, resolution)
}
function drawSanity(x, y) {
    fill(255);
    stroke(0);
    rect(x, y, resolution - 1, resolution - 1);
}

function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
  }
}
sum -= grid[x][y];
return sum;
}
