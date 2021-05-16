class Particle {
    constructor(x, y, r) {
        var options = {
            restitution: 0.5,
            friction: 0.1,
            isStatic: false
        }
        this.r = 8;
        this.image = loadImage("apple.png");
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color (random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this. body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r-35, this.r-33);
        pop();
    }
}