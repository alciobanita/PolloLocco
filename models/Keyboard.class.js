class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;

    constructor() {
        this.listen();
    }
    
    listen() {
        window.addEventListener("keydown", (e) => {
            if (e.key == "ArrowLeft") {
                this.LEFT = true;
            }
            if (e.key == "ArrowRight") {
                this.RIGHT = true;
            }
            if (e.key == "ArrowUp") {
                this.UP = true;
            }
            if (e.key == "ArrowDown") {
                this.DOWN = true;
            }
            if (e.key == " ") {
                this.SPACE = true;
            }
        });

        window.addEventListener("keyup", (e) => {
            if (e.key == "ArrowLeft") {
                this.LEFT = false;
            }
            if (e.key == "ArrowRight") {
                this.RIGHT = false;
            }
            if (e.key == "ArrowUp") {
                this.UP = false;
            }
            if (e.key == "ArrowDown") {
                this.DOWN = false;
            }
            if (e.key == " ") {
                this.SPACE = false;
            }
        });
    }
}