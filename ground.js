class Ground{
    constructor(x,y,w,h){
    var option = {isStatic:true}
    this.body=Bodies.rectangle(x,y,w,h,option)
    World.add(world,this.body)
    this.width=w;
    this.height=h;
    }
    display(){
        rectMode(CENTER)
        fill("green")
rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}