const passport=require('passport');
const JWTstrategy=require('passport-jwt').Strategy;
const ExtractJWT=require('passport-jwt').ExtractJwt;
const Doctor=require('../models/doctor');

let opts={
    jwtFromRequest :ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'IAmAVeryComplicatedSecretKey'
}

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