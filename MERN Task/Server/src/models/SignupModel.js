const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://abid117:117abid@cluster0.rv9gghz.mongodb.net/freshb10?retryWrites=true&w=majority")

var userSchema=new mongoose.Schema({
    name: String,
    username:String,
    password: String,
    cpassword:String
})
var userModel=mongoose.model('users',userSchema);

module.exports = userModel