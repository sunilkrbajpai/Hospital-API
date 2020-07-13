const express=require('express');
const app=express();            //create instance of express

const passportJWT=require('./config/passport-jwt');         //import JWT
const PORT=8000;                                            //Port
const db=require('./config/mongoose');

//encode the body data
app.use(express.urlencoded({extended:true}));

//use express router
app.use('/',require('./routes'));

//run app on PORT
app.listen(PORT,function(err){
    if(err){
        console.log(`Error in running server:${err}`);

    }
    console.log(`Server is running on Port: ${PORT}`);
})