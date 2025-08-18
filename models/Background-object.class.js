class BackgroundObject extends MoveableObject{
    width = 720;
    height = 480;
    
    constructor(imagePath, x, y, width, height) {
        super();
        this.loadImage(imagePath);
        this.x = x;
        this.y = y;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}