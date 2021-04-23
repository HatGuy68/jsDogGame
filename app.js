const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = './shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;

let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 5;

let animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, canvas.width, canvas.height);
    
    

    gameFrame++;
    requestAnimationFrame(animate);
};

animate();



/*
drawImage syntax:
ctx.drawImage( image, cutFromSource(x1, y1, x2, y2), outputPosition(x1, y1, x2, y2) );
 */