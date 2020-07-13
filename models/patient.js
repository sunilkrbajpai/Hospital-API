const mongoose=require('mongoose');         //require mongoose
const pSchema=new mongoose.Schema({
    phone:{                                   //store phone
        type:Number,
        required:true,
        unique:true
    },
    password:{                                  //store password
        type:String,
        required:true
    },
    name:{                                      //store name
        type:String,
        required:true
    },
    registerBy:{                                   //store doctor id
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor',
        required:true
    }
},
{
    timestamps:true                             //store timestamps
});

// exports user
const Patient=mongoose.model('Patient',pSchema);
module.exports=Patient;