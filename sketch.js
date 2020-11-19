// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Game of Life
// Video: https://youtu.be/FWSR_7kZuYg


const FRAME_RATE = 0.25
const COLS = 10 
const ROWS = 30 
const IMAGES = []
const TOTAL_FLOWERS = 5
const BG_COLOR = "#fff"

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
let cols;
let rows;
let resolution = 32;
let generation = 0;

function preload() {
    for (var i=1; i <= TOTAL_FLOWERS; i++) {
        IMAGES.push(
            loadImage(`/assets/flowers/${i}.png`)
        )
    }
}

function setup() {
  createCanvas(600, 1200);
  frameRate(FRAME_RATE)
  // cols = width / resolution;
  // rows = height / resolution;
  cols = COLS
  rows = ROWS
  // grid = make2DArray(cols, rows);
  // for (let i = 0; i < cols; i++) {
  //   for (let j = 0; j < rows; j++) {
  //     grid[i][j] = floor(random(2));
  //   }
  // }
  resetGrid()
}

function resetGrid() {
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
}

function drawFlowers(x, y) {
    image(IMAGES[0], x, y, resolution, resolution)
}
function drawSanity(x, y) {
    fill(255);
    stroke(0);
    rect(x, y, resolution - 1, resolution - 1);
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
