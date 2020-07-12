const express=require('express');
const app=express();
const PORT=8000;


app.listen(PORT,function(err){
    if(err){
        console.log(`Error in running server:${err}`);

    }
    console.log(`Server is running on Port: ${PORT}`);
})