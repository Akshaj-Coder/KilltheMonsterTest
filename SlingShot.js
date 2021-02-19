class SlingShot{
    constructor(bodyA,pointB) {
        var options = {
            bodyA:bodyA,
            pointB: pointB,
            stiffness: 0.08,
            length: 10
        }

        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    display() {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;

        push();
        strokeWeight(4);
        stroke(165,42,42);
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop();
    }
}