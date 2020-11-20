// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Game of Life
// Video: https://youtu.be/FWSR_7kZuYg


const FRAME_RATE = 0.7 
const COLS = 16 
const ROWS = 60 
const IMAGES = []
const TOTAL_FLOWERS = 32
const BG_COLOR = "#fff"
const RESOLUTION = 48;
let GRIDS = [];

class Garden {
    constructor({cols, rows, resolution=RESOLUTION, startX, startY, lifecycle=1 }) {
        this.startX = startX;
        this.startY = startY;
        this.cols = 1;
        this.rows = 1;
        this.lifecycle = lifecycle;
        this.maxCols = cols;
        this.maxRows = rows;
        this.resolution = resolution;
        this.grid = resetGrid(cols, rows)
        this.generation = 0;
        this.image = random(IMAGES)
    }

    reset() {
        this.grid = resetGrid(this.cols, this.rows)
    }

    draw() {
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
                let x = i * this.resolution;
                let y = j * this.resolution;
                if (this.grid[i][j] == 1) {
                    drawFlowers(x, y, this.resolution, this.image)
                    // drawSanity(x, y, this.resolution)
                }
            }
        }
    }

    next() {
        this.generation += 1;
        const hasReachedFullSize = this.cols === this.maxCols && this.rows === this.maxRows;

        if (this.generation % this.lifecycle === 0) {
            if (this.cols < this.maxCols) {
                this.cols += 1;
            } 
            if (this.rows < this.maxRows) {
                this.rows += 1;
            }
            console.log("!reset", this.rows, this.cols)
            if (!hasReachedFullSize) {
                this.reset()
            }
        }

        if (hasReachedFullSize) {
            // plant new plant
            this.image = random(IMAGES)
            this.cols = 5;
            this.rows = 5;
        }

        this.getNextBoard()
    }

    getNextBoard() {
        let next = make2DArray(this.cols, this.rows);

        // Compute next based on grid
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
                let state = this.grid[i][j];
                // Count live neighbors!
                let sum = 0;
                let neighbors = countNeighbors(this.grid, i, j, this.cols, this.rows);

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
  const canvas = createCanvas(1200, 1200);
  frameRate(FRAME_RATE)

  GRIDS = [
    new Garden({ 
        startX: width/8, startY: 0,
        cols:  160, rows: 10,
        lifecycle: 2
    }),
    new Garden({ 
        startX: width/2, startY: height/2,
        cols:  7, rows: 7,
        lifecycle: 5
    }),
    new Garden({ 
        startX: 0, startY: height*1.45,
        cols:  47, rows: 15,
        lifecycle: 7
    }),
    new Garden({ 
        startX: 0, startY: height/3,
        cols:  5, rows: 50,
        lifecycle: 15
    }),
  ]
  resetGrid()
}


function draw() {
  background(BG_COLOR);
  for (const garden of GRIDS) {
      push()
      translate(garden.startX, garden.startY)
      garden.draw()
      pop()
      garden.next()
  }
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

function drawFlowers(x, y, resolution, img) {
    image(img, x, y, resolution, resolution)
}
function drawSanity(x, y, resolution) {
    fill(255);
    stroke(0);
    rect(x, y, resolution - 1, resolution - 1);
}

function countNeighbors(grid, x, y, cols, rows) {
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
