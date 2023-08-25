const mongoose = require("mongoose");

//ste 1: db connection
const conn_str = "mongodb+srv://GURJYOT:0123456789@cluster0.6zyxpco.mongodb.net/hospital?retryWrites=true&w=majority";

mongoose.connect(conn_str, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log("connected successfully"))
    .catch((error)=> console.log(error));

//step 2: schema of collection
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    reason: String,
    dname: String,
    date: String,
    message: String,
})

//step 3 : creating and mapping collection object
const userObject = new mongoose.model("patient_appointments", userSchema);

// console.log(userObject);

exports.User = userObject;