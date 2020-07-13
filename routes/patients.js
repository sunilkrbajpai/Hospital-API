const express=require('express');       //import express
const router=express.Router();          //create router
const passport=require('passport');     //import passport
const patients_controller=require('../controllers/patients_controller');

router.post('/register',passport.authenticate('jwt',{session:false}),patients_controller.register);    //route for register patients
router.post('/:id/create_report',passport.authenticate('jwt',{session:false}),patients_controller.createReport);        //route for create report
router.post('/:id/all_reports',patients_controller.allReports);             //route for all reports

//export router
module.exports=router;