const Doct=require('../models/doctor');

module.exports.register=function(req,res){
    
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

module.exports.login=function(req,res){
    return res.end('<h1>LOgin</h1>');
}