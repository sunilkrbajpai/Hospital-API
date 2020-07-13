const Patient=require('../models/patient');
const Report=require('../models/report');
const jwt=require('jsonwebtoken');

module.exports.register = function (req, res) {

  const usertoken = req.headers.authorization;
  const token = usertoken.split(' ');
  const decoded = jwt.verify(token[1], 'IAmAVeryComplicatedSecretKey');


  Patient.findOne({phone:req.body.phone},function(err,user){
    if(err)
    {
        console.log('Error Occured in registering doctor!');
        return;
    }
    if(!user)
    {
      let registerBy=(decoded._id);
      req.body.registerBy=registerBy;

      Patient.create(req.body,function(err,patient)
        {
            if(err)
            {console.log('err in creating user');return};
            
            return res.json(200,{
                message:'Patient Registered successfully',
                details:patient
            })
        })
    }

    else
    return res.json(200,{
        message:'Already Registered!',
        details:user
    })
}).populate('registerBy')
};
  
  module.exports.createReport = async function (req, res) {

  const usertoken = req.headers.authorization;
  const token = usertoken.split(' ');
  const decoded = jwt.verify(token[1], 'IAmAVeryComplicatedSecretKey');

    try{
        let report=await Report.create({
            status:req.body.status,
            doctor:decoded._id,
            patient:req.params.id
        });

        return res.status(200).json({
          message:'New Report Generated!',
          details:report
        })
      }
      catch(err){
        if(err){
          console.log(`${err}`);
          return res.status(500).json({
          message:'Error Occured'
        })}
      }
  };
  
  module.exports.allReports = async function (req, res) {
    try{
      let report=await Report.find({ patient:req.params.id }).populate('doctor').populate('patient');

      return res.status(200).json({
        message:'All report of this patient',
        details:report
      })
    }
    catch(err){
      if(err){
        console.log(`${err}`);
        return res.status(500).json({
        message:'Error Occured!'
      })}
    }
  };
  