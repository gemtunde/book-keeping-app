
const mongoose = require('mongoose');

const dbConnect = () => {
        //connect mongodb
    //const dbUrl = 'mongodb://localhost:27017/book-keeping-app'
    mongoose.connect(process.env.MONGODB_URI, {
       // useFindAndModify : true,
        useUnifiedTopology : true,
       // useCreateIndex : true,
        useNewUrlParser : true,
    })
    .then(()=> {
        console.log('db connected')
    })
    .catch((err)=> {
        console.log(err)
    });
}


module.exports = dbConnect
