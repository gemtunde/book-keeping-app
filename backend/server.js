
const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./config/dbConnect') 
const app = express();
const error = require('./middlewares/errorMiddlewareHandler');
const cors = require('cors');
const usersRoute = require('./routes/usersRoutes');
const bookRouter = require('./routes/bookRoutes');

//dotenv you must always call your env before mongoose conect else error will cone up
dotenv.config();

//connect mongodb
    dbConnect() ;


//middleware
app.use(cors());
app.use(express.json());


  //routes

    //user routes
    app.use('/api/users', usersRoute);
    //book routes
    app.use('/api/books', bookRouter);


    //console.log(process.env.JWT_SECRET)
    
    //error middleware 
app.use(error.errorMiddlewareHandler);   

//server
const PORT = process.env.PORT || 5000 ;
app.listen(PORT, ()=> {
    console.log(` PORT ${PORT} is running`);
} )

//console.log(app);