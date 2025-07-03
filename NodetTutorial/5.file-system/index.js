
/*  
existsSync
mkdirSync
writeFileSync
readFileSync

*/

const fs=require("fs")
const path= require("path")

const dataFolder=path.join(__dirname,"data");
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("File created successfully");
}
const filePath=path.join(dataFolder,"example.txt");

fs.writeFileSync(filePath,"hello from node js");
console.log("file created successfully");
const readContentFromfile=fs.readFileSync(filePath,"utf8");
console.log("file content",readContentFromfile);

fs.appendFileSync(filePath,"hello from node js 2");
console.log("file content after new line added ",readContentFromfile);

//async way of creating the file
const asyncFilePath=path.join(dataFolder,"asyncExample.txt");
fs.writeFile(asyncFilePath,"Hello,Async node js",(err)=>{
    if(err) throw err;
    console.log("Async file created successfully");


fs.readFile(asyncFilePath,"utf8",(err,data) =>{
    if (err) throw err;
    console.log("Async file content",data);

fs.appendFile(asyncFilePath,"/new line added",(err)=>{
    if (err) throw err;
    console.log("Async file content after new line added");

fs.readFile(asyncFilePath,"utf8",(err,data) =>{
    if (err) throw err;
    console.log("Async file content",data);
})
})
})
})