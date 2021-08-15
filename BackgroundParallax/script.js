function createBackground() {
    const canvas_back = document.getElementById('canvas_background');
    const ctx_back = canvas_back.getContext('2d');
    const BACKGROUND_WIDTH = canvas_back.width = 800;
    const BACKGROUND_HEIGHT = canvas_back.height = 700;

    let gameSpeed = 5;

    const backgroundLayer1 = new Image();
    backgroundLayer1.src = "./backgroundLayers/layer-1.png"
    const backgroundLayer2 = new Image();
    backgroundLayer2.src = "./backgroundLayers/layer-2.png"
    const backgroundLayer3 = new Image();
    backgroundLayer3.src = "./backgroundLayers/layer-3.png"
    const backgroundLayer4 = new Image();
    backgroundLayer4.src = "./backgroundLayers/layer-4.png"
    const backgroundLayer5 = new Image();
    backgroundLayer5.src = "./backgroundLayers/layer-5.png"

    class Layer {
        constructor(image, speedModifier) {
            this.x = 0;
            this.y = 0;
            this.width = 2400;
            this.height = 700;
            this.image = image;
            this.speedModifier = speedModifier;
            this.speed = gameSpeed * this.speedModifier;
        }

        update() {
            this.speed = gameSpeed * this.speedModifier
            if (this.x <= -this.width) {
                this.x = 0;
            }
            this.x = Math.floor(this.x - this.speed);
        }

        draw() {
            ctx_back.drawImage(this.image, this.x, this.y, this.width, this.height);
            ctx_back.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
        }
    }

    const layer1 = new Layer(backgroundLayer1, 0.2);
    const layer2 = new Layer(backgroundLayer2, 0.4);
    const layer3 = new Layer(backgroundLayer3, 0.6);
    const layer4 = new Layer(backgroundLayer4, 0.8);
    const layer5 = new Layer(backgroundLayer5, 1.0);

    const gameBackgrounds = [layer1, layer2, layer3, layer4, layer5]

    animate();

    function animate() {
        ctx_back.clearRect(0, 0, 800, 700);
        gameBackgrounds.forEach(layer => {
            layer.update();
            layer.draw();
        })
        requestAnimationFrame(animate);
    }
}