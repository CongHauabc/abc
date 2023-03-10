
import  mongoose  from 'mongoose';
import  bcryptjs  from 'bcryptjs';

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    },
    
},
{
    timestamps:true
}
)
//login
userSchema.methods.matchPassword = async function(enterPassword){
    return await bcryptjs.compare(enterPassword,this.password)
}

//register
userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    const salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password,salt)
})

const User = mongoose.model("User",userSchema)
export default User;
