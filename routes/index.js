const express=require('express');
const router=express.Router();              //create router

const homecontroller=require('../controllers/home_controller');

router.get('/',homecontroller.home);                //route for home
router.use('/doctors',require('./doctors'));        //route for doctors
router.use('/patients',require('./patients'));      //route for patients
router.use('/reports',require('./reports'));        //route for reports

//exports router
module.exports=router;