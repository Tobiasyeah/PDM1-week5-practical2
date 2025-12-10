let player = {
    x: 50,
    y: 50,
    playerSpeedX: 0,
    playerSpeedY: 0,
    size: 50
}

let obstacle = {
    x: 150,
    y: 150,
    width: 100,
    height: 150,
}

function setup() {
    createCanvas(400, 400)
}

function draw() {
    background(255)
    fill(0, 255, 0)
    rectMode(CENTER)
    rect(player.x, player.y, player.size)
    fill(0)
    rect(obstacle.x, obstacle.y, obstacle.width, obstacle.height)
    player.x += player.playerSpeedX
    player.y += player.playerSpeedY

}

function keyPressed() {
    if (keyPressed === 'w' && !(player.y - 50 <= obstacle.y + 150)) {
        player.playerSpeedY = -1
        console.log(player.playerSpeedY)
    } else {
        player.playerSpeedY = 0


    } if (keyPressed === 's' && !(player.y + 50 >= obstacle.y - 150)) {
        player.playerSpeedY = 1
    } else {
        player.playerSpeedY = 0

    } if (keyPressed === 'a' && !(player.x - 50 <= obstacle.x + 100)) {
        player.playerSpeedX = -1
    } else {
        player.playerSpeedX = 0
    } if (keyPressed === 'd' && !(player.x + 50 >= obstacle.x - 100)) {
        player.playerSpeedX = 1
    } else {
        player.playerSpeedX = 0
    }




}