const express=require('express');
const router=express.Router();

const homecontroller=require('../controllers/home_controller');

router.get('/',homecontroller.home);
router.use('/doctors',require('./doctors'));
router.use('/patients',require('./patients'));
router.use('/reports',require('./reports'));

module.exports=router;