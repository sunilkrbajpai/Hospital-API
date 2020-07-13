const Doct=require('../models/doctor');
const jwt=require('jsonwebtoken');

module.exports.register= function(req,res){

    Doct.findOne({email:req.body.email},function(err,user){
        if(err)
        {
            console.log('Error Occured in registering doctor!');
            return;
        }
        if(!user)
        {

            Doct.create(req.body,function(err,doct)
            {
                if(err)
                {console.log('err in creating user');return};
                
                return res.json(200,{
                    message:'Registered successfully'
                })
            })
        }
        else
        return res.json(200,{
            message:'Already Registered! Go to Login',
            // details:user
        })
    })

}

module.exports.login=async function(req,res){

    try{
        let doctor=await Doct.findOne({email:req.body.email});

        if(!doctor || doctor.password!=req.body.password)
        {
            return res.json(422,{
                message:'Invalid credentials'
            })
        }

        return res.json(200,{
            message:'Sign in successsful',
            data:{
            token:jwt.sign(doctor.toJSON(),'IAmAVeryComplicatedSecretKey',{expiresIn:'2h'})
            }
        })
    }
    catch(err){
        return res.json(500,{
            message:'Some Internal error'
        })
    }
}