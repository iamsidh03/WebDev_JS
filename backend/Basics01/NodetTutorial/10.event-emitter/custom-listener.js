const EventEmitter=require("events");

class MycustomEmitter extends EventEmitter{
    constructor(){
        super();
        this.greeting="Hello";
    }
    greet(name){
        this.emit("greeting",`${this.greeting} ${name}`);
    }
}

const myCustomEmitter =new MycustomEmitter();
myCustomEmitter.on("greeting",(input) =>{
    console.log(`Greeting event`,input);
})
myCustomEmitter.greet("John");