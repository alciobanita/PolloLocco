class Chicken extends MoveableObject {
    width = 80;
    height = 60;
    speed = 1.5;
    x = 0;
    y = 370;

    constructor() {
        super();
        this.loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 100 + Math.random() * 500;
    }

    moveLeft() {
        this.x -= this.speed;
    }
}