let player;
let obstacles = [];
let exit;
let gameWon = false;
let clickedObstacle = null;

function setup() {
    createCanvas(800, 600);
    createPlayer();
    createObstacles();
    createExit();
}

// Create the player object
function createPlayer() {
    player = {
        x: 50,
        y: height / 2,
        size: 25,
        speed: 5
    };
}

// Create multiple obstacles with different sizes and colors
function createObstacles() {
    obstacles.push({
        x: 200,
        y: 150,
        w: 80,
        h: 40,
        color: color(255, 0, 0)
    });
    
    obstacles.push({
        x: 400,
        y: 350,
        w: 120,
        h: 60,
        color: color(0, 0, 255)
    });
}

// Create the exit object
function createExit() {
    exit = {
        x: width - 80,
        y: height / 2,
        size: 50
    };
}

function draw() {
    background(220);
    movePlayer();
    drawBorder();
    drawObstacles();
    drawPlayer();
    drawExit();
    checkExit();
    displayWinMessage();
}

// Move the player based on keyboard input
function movePlayer() {
    if (keyIsPressed && key === 'a' || key === 'A') {
        player.x -= player.speed;
    }
    if (keyIsPressed && key === 'd' || key === 'D') {
        player.x += player.speed;
    }
    if (keyIsPressed && key === 'w' || key === 'W') {
        player.y -= player.speed;
    }
    if (keyIsPressed && key === 's' || key === 'S') {
        player.y += player.speed;
    }
    
    // Keep player on canvas
    if (player.x < player.size / 2) {
        player.x = player.size / 2;
    } else if (player.x > width - player.size / 2) {
        player.x = width - player.size / 2;
    }
    
    if (player.y < player.size / 2) {
        player.y = player.size / 2;
    } else if (player.y > height - player.size / 2) {
        player.y = height - player.size / 2;
    }
}

// Draw border around the screen
function drawBorder() {
    stroke(0);
    strokeWeight(4);
    noFill();
    rect(0, 0, width, height);
}

// Draw all obstacles on the screen
function drawObstacles() {
    for (let obs of obstacles) {
        fill(obs.color);
        rect(obs.x, obs.y, obs.w, obs.h);
    }
    
    // Draw clicked obstacle if exists
    if (clickedObstacle !== null) {
        fill(0, 255, 0);
        rect(clickedObstacle.x, clickedObstacle.y, clickedObstacle.w, clickedObstacle.h);
    }
}

// Draw the player
function drawPlayer() {
    fill(100, 200, 255);
    circle(player.x, player.y, player.size);
}

// Draw the exit
function drawExit() {
    fill(255, 215, 0);
    square(exit.x - exit.size / 2, exit.y - exit.size / 2, exit.size);
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text('EXIT', exit.x, exit.y);
}

// Check if player reached the exit
function checkExit() {
    let distanceToExit = dist(player.x, player.y, exit.x, exit.y);
    if (distanceToExit < player.size / 2 + exit.size / 2) {
        gameWon = true;
    }
}

// Display "You Win" message
function displayWinMessage() {
    if (gameWon) {
        fill(0, 0, 0, 200);
        rect(0, 0, width, height);
        fill(255);
        textSize(48);
        textAlign(CENTER, CENTER);
        text('YOU WIN!', width / 2, height / 2);
    }
}


// Draw an object to the screen when pressing the mouse
function mousePressed() {
    if (clickedObstacle === null) {
        clickedObstacle = {
            x: mouseX - 40,
            y: mouseY - 30,
            w: 80,
            h: 60,
            color: color(255, 165, 0)
        };
    }
    return false;
}
