const mongoose=require('mongoose');         //require mongoose
const rSchema=new mongoose.Schema({
    status:{                                   //store status
        type:String,
        required:true,
    },
    doctor:{                                  //store doctor id
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    },
    patient:{                                      //store patuent id
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    }
},
{
    timestamps:true                             //store timestamps
});

// exports user
const Report=mongoose.model('Report',rSchema);
module.exports=Report;