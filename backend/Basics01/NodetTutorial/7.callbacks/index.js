const { log } = require('console')
const fs=require('fs')

function person(name,callbacks){
    console.log(`name of a person is ${name}`)
    callbacks();
}
function address(){
    console.log("India");

}
person("Siddharth",address);

fs.readFile("input.txt","utf8",(err,data) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})