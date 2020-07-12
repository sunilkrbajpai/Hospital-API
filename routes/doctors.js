const express=require('express');
const router=express.Router();
const doctors_controller=require('../controllers/doctors_controller');

router.get('/register',doctors_controller.register);
router.get('/login',doctors_controller.login);


module.exports=router;