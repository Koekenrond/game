function snake1115 () {
    snake = game.createSprite(2, 2)
    snake = game.createSprite(2, 2)
    snake = game.createSprite(2, 2)
    snake = game.createSprite(2, 2)
    snake = game.createSprite(2, 2)
}
input.onButtonPressed(Button.A, function () {
    snake.turn(Direction.Left, 90)
})
function snake15 () {
    snake = game.createSprite(2, 2)
    snake = game.createSprite(2, 2)
    snake = game.createSprite(2, 2)
    snake = game.createSprite(2, 2)
    snake = game.createSprite(2, 2)
}
function snake610 () {
    snake = game.createSprite(2, 2)
    snake = game.createSprite(2, 2)
    snake = game.createSprite(2, 2)
    snake = game.createSprite(2, 2)
    snake = game.createSprite(2, 2)
}
function snake1620 () {
    snake = game.createSprite(2, 2)
    snake = game.createSprite(2, 2)
    snake = game.createSprite(2, 2)
    snake = game.createSprite(2, 2)
    snake = game.createSprite(2, 2)
}
input.onButtonPressed(Button.B, function () {
    snake.turn(Direction.Right, 90)
})
function snake2124 () {
    snake = game.createSprite(2, 2)
    snake = game.createSprite(2, 2)
    snake = game.createSprite(2, 2)
    snake = game.createSprite(2, 2)
}
let apple: game.LedSprite = null
let snake: game.LedSprite = null
snake = game.createSprite(2, 2)
let apple_count = 0
basic.forever(function () {
    if (snake.isTouching(apple)) {
    	
    }
})
basic.forever(function () {
    snake.move(1)
    basic.pause(500)
})
basic.forever(function () {
    basic.pause(2000)
    if (apple_count == 0) {
        apple = game.createSprite(randint(0, 4), randint(0, 4))
        apple_count = 1
    }
})
