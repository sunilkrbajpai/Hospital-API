const express=require('express');
const router=express.Router();              //create router
const reports_controller=require('../controllers/reports_controller');

//route for getting reports by status
router.post('/:status',reports_controller.fetchReports);

//export router
module.exports=router;