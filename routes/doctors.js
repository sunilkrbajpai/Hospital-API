const express=require('express');
const router=express.Router();                  //create router
const doctors_controller=require('../controllers/doctors_controller');         //import doct_controller

router.get('/register',doctors_controller.register);            //route for register doctor
router.post('/login',doctors_controller.login);                 //route for login doctor

//export router
module.exports=router;