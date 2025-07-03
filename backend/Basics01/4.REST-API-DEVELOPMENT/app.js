const express=require("express");
const app=express();

app.use(express.json());

let books=[{
    id:1,
    title:"To Kill a Mockingbird",
},
{
    id:2,
    title:"1984",
},{
    id:3,
    title:"The Great Gatsby",
}
]
app.get('/',(req,res) =>{
    res.json({
        message:"Welcome to the Book API",
    });
});

app.get('/get',(req,res)=>{
    res.json(books);
});

// check if book id matches with requested id or not
app.get("/get/:id",(req,res)=>{
    const book=books.find((item) => item.id ==req.params.id);
    if(book){
        res.status(200).json(book);

    }
    else{
        res.status(404).json({
            message:"Book not found"
        })
    }
})

//to add new book

app.post("/add",(req,res) =>{
    const newBook ={
        id: Math.floor(Math.random()*1000).toString(),
        title:`Book ${Math.floor(Math.random() *1000)}`,
    }
    books.push(newBook);
    res.status(200).json({
        data:newBook,
        message:"Book added successfully"
    })
});

//to update book
app.put("/update/:id",(req,res) =>{
    const findCurrentBook =books.find((bookItem) => bookItem.id===req.params.id);
    if(findCurrentBook){
        findCurrentBook.title=req.params.title || findCurrentBook.title;
        res.status(200).json({
            message:`Book with ID ${req.params.id} updated successfully`,
            data:findCurrentBook,
        })
    }
    else{
        res.status(404).json({
            message:"Book not found",
        })
    }
    
})
//to delete book
app.delete("/delete/:id",(req,res) =>{
    const findIndexofCurrentBook =books.findIndex((item)=> item.id ===req.params.id);
    if(findIndexofCurrentBook !=-1){
        const deleteBook=books.splice(findIndexofCurrentBook,1);
        res.status(200).json({
            message:"Book deleted successfully",
            data:deleteBook[0],
        })
    }
    else{
        res.status(404).json({
            message:"Book not found",
        })
    }
})

const PORT =3000;
app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
})