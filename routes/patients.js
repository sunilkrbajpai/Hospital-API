const express=require('express');
const router=express.Router();
const patients_controller=require('../controllers/patients_controller');

router.get('/register',patients_controller.register);
router.get('/create_report',patients_controller.createReport);
router.get('/all_report',patients_controller.allReports);

module.exports=router;