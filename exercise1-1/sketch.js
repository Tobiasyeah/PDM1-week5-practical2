let rectangles = []
let rectInfo = []


function setup() {
    createCanvas(600, 600)
    generateRectangles()
    rectangles = rectInfo
    console.log(rectangles)
}

function generateRectangles() {
    for (let i = 0; i < 100; i++) {
        rectInfo.push({
            x: random(20, 580),
            y: random(20, 580),
            width: random(10, 30),
            height: random(10, 30)

        })


    }
}

function keyPressed() {
    if (keyCode === 32) {
        rectangles.length = 0
        generateRectangles()
        rectangles = rectInfo
    }

}

function draw() {
    background(255)

    for (let i = 0; i < rectangles.length; i++) {
        if (i % 2 === 1) {
            fill(0)
        } else (fill(255))
        rect(rectangles[i].x, rectangles[i].y, rectangles[i].width, rectangles[i].height)
    }
}

