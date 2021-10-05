

const express = require('express');
const bookRouter = express.Router();
const Book =  require('../models/Book')
const expressAsyncHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');

//create book
bookRouter.post('/', expressAsyncHandler(async (req, res)=> {

const book = await Book.create(req.body);

    if(book){
        res.status(200).json(book)
    }else{
  
        res.status(400).send('failed to create books')
    }
} ));


//get alll books

bookRouter.get('/all-books', expressAsyncHandler(async (req,res) => {
    const book = await Book.find();
    if(book){
        res.status(200).send(book)
    }
    else{
        res.status(400).send("books not in records")
    }
}))

//update books
bookRouter.put('/update/:id', authMiddleware, expressAsyncHandler(async(req, res) => {
   
    const book = await Book.findById(req.params.id);
    if(book) {
       
       const updateBook = await Book.findByIdAndUpdate(
           req.params.id,
           req.body,
           {
               new : true,
               runValidators : true
           }
       );
       if(updateBook){
        res.status(200).send(updateBook)
       }
       else{res.status(500).send('no suck book available')}
    } 
    
}))

//delete books

bookRouter.delete('/delete/:id', authMiddleware, expressAsyncHandler(async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);

    if(book){
        res.status(200).send('book deleted')
    }
    else{
        res.status(400).send('book not found to delete')
    }
    
}))

module.exports = bookRouter ;


