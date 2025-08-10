class MoveableObject {
    x = 120;
    y = 250;
    img;
    width = 150;
    height = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        this.x += 5;
    }

    moveLeft() {
        this.x -= 5;
    }
    
}

