class ThrowableObject extends MoveableObject {

    IMAGES_BOTTLE_ROTATION = [
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png'
    ];

    IMAGES_BOTTLE_SPLASH = [
        'img/6_salsa_bottle/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_splash/5_bottle_splash.png'
    ];

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png');
        this.loadImages(this.IMAGES_BOTTLE_ROTATION);
        this.loadImages(this.IMAGES_BOTTLE_SPLASH);
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 70;
        this.speedX = 15;
        this.throw();
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();

        setInterval(() => {
            this.x += 10;
            this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
        }, 25);

    }

    splash() {
        this.speedX = 0;
        this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
    }

    isSplashing() {
        return this.speedX == 0;
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY*0.5;
                this.speedY -= this.acceleration *0.5;
            }
        }, 1000 / 25);
    }
}