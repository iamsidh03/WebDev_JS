const fs=require('fs')
fs.readFile("input.txt","utf8",(err,data)=>{
    if (err) {
        console.error(err);
    }
    const modifyFile=data.toUpperCase();
    fs.writeFile("output.txt",modifyFile,(err) =>{
        if(err) {
            console.log("Error",err);
        }
    
    console.log("\n New modified data is stored in output.txt");

    fs.readFile("output.txt","utf8",(err,data) =>{
        if(err) {
            console.log("Error",err);
        }
        console.log(data);

    })
})
})