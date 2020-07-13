const passport=require('passport');                     //import passport
const JWTstrategy=require('passport-jwt').Strategy;     //import passport jwt
const ExtractJWT=require('passport-jwt').ExtractJwt;
const Doctor=require('../models/doctor');               //import model

//set options for JWT
let opts={
    jwtFromRequest :ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'IAmAVeryComplicatedSecretKey'
}

//create Token
passport.use(new JWTstrategy(opts,function(jwtPayload,done){
    Doctor.findById(jwtPayload._id,(err,user)=>{
        if(err){console.log('Error in finding Doctor');return;}

        if(user){
            return done(null,user);
        }
        else{
            return done(null,false);
        }
    })
}))

module.exports=passport;