const gameContainer = document.getElementById('game-container');

gameContainer.style.height = "500px";
gameContainer.style.width = "500px";
gameContainer.style.border = "2px solid black";
gameContainer.style.background= "lightblue";

// Creating snake object
const snake = document.createElement('div');
snake.style.position = 'absolute';
snake.style.top = 0;
snake.style.left = 0;
snake.style.width = '20px';
snake.style.height = '20px';
snake.style.backgroundColor = 'green';
gameContainer.appendChild(snake);

// Initial position of the snake

x = 10;
y = 10;

dx = 10;
dy = 0;

// Function to move the snake
function moveSnake() {
    x += dx;
    y += dy;

    // Check boundaries
    if (x <= 0) dx = 0;
    if (y <= 0) dy = 0;
    if (x > 480) dx = 0;
    if (y > 480) dy = 0;

    snake.style.left = x + 'px';
    snake.style.top = y + 'px';
}

setInterval(moveSnake, 500);

// Event listener for key presses
function handleKeyPress(event) {
    if(event.key=== 'ArrowDown' && dy === 0) {
        dy += 10;
        dx = 0;
    }
    if(event.key=== 'ArrowUp' && dy === 0) {
        dy -= 10;
        dx = 0;
    }
    if(event.key=== 'ArrowLeft' && dx === 0) {
        dx -= 10;
        dy = 0;
    }
    if(event.key=== 'ArrowRight' && dx === 0) {
        dx += 10;
        dy = 0;
    }
}
document.addEventListener('keydown', handleKeyPress);
// Function to reset the game
function resetGame() {
    x = 10;
    y = 10;
    dx = 10;
    dy = 0;
    snake.style.left = x + 'px';
    snake.style.top = y + 'px';
}
// Add a reset button
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Game';
resetButton.style.position = 'absolute';
resetButton.style.top = '10px';
resetButton.style.right = '10px';
resetButton.addEventListener('click', resetGame);
gameContainer.appendChild(resetButton);

// Add a score display
const scoreDisplay = document.createElement('div');
scoreDisplay.textContent = 'Score: 0';
scoreDisplay.style.position = 'absolute';
scoreDisplay.style.top = '10px';
scoreDisplay.style.left = '10px';
scoreDisplay.style.color = 'black';
gameContainer.appendChild(scoreDisplay);

// Function to update the score
function updateScore(score) {
    scoreDisplay.textContent = 'Score: ' + score;
}
// Initialize score
let score = 0;
// Function to increase the score
function increaseScore() {
    score += 10;
    updateScore(score);
}
// Add a food item
const food = document.createElement('div');
food.style.position = 'absolute';
food.style.width = '20px';
food.style.height = '20px';
food.style.backgroundColor = 'red';
food.style.top = Math.floor(Math.random() * 480) + 'px';
food.style.left = Math.floor(Math.random() * 480) + 'px';
gameContainer.appendChild(food);

// Function to check if the snake eats the food
function checkFoodCollision() {
    const snakeRect = snake.getBoundingClientRect();
    const foodRect = food.getBoundingClientRect();

    if (snakeRect.left < foodRect.right &&
        snakeRect.right > foodRect.left &&
        snakeRect.top < foodRect.bottom &&
        snakeRect.bottom > foodRect.top) {
        // Collision detected
        increaseScore();
        // Move food to a new random position
        food.style.top = Math.floor(Math.random() * 480) + 'px';
        food.style.left = Math.floor(Math.random() * 480) + 'px';
    }
}
// Update the game loop to check for food collision
setInterval(() => {
    moveSnake();
    checkFoodCollision();
}, 500);

// Add a game over condition
function checkGameOver() {
    if (x < 0 || y < 0 || x > 480 || y > 480) {
        alert('Game Over! Your score was: ' + score);
        resetGame();
    }
}
// Update the game loop to check for game over
setInterval(() => {
    moveSnake();
    checkFoodCollision();
    checkGameOver();
}, 500);
