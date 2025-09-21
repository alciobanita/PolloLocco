class MoveableObject extends DrawableObject {
    speed = 0.15;
    speed = 0.15;
    speedY = 0;
    acceleration = 0.3;
    otherDirection = false;
    energy = 100;
    lastHit = 0;

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.ImageCache[path];
        this.currentImage++;
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 230;
        }
    }
    
    jump() {
        this.speedY = 10;
    }

    isColliding(mo) {
        return (this.x + this.width - 20) > mo.x &&
            (this.y + this.height - 20) > mo.y &&
            (this.x + 20) < (mo.x + mo.width) &&
            (this.y + 20) < (mo.y + mo.height);
    }

    hit() {
        this.energy -= 2;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return  timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }
}

