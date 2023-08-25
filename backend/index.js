const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

const mongo = "mongodb://localhost:27017/hospital";
const atlas = "tera atlas ka hospital cluster";
mongoose.
  connect(atlas)
  .then(()=>app.listen(8080))
  .then(()=>console.log("connected to mongodb at port 8080"))
  .catch((error)=>console.log(`${error} is error`));
// User schema and model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    reason: String,
    dname: String,
    date: String,
    message: String,
});

const User = mongoose.model('patient_appointments', userSchema);

// yete tujhe creadital
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken, {
  lazyLoading: false,
});
 
app.post('/send-message', async (req, res) => {
  try {
    const { name, email, phone, reason, dname, date, message } = req.body;

    // Save user data to MongoDB
    const user = new User({
      name, 
      email, 
      phone, 
      reason, 
      dname, 
      date, 
      message
    });
    await user.save();

    await client.messages.create({
      body: `Hello ${name}, your appointment is booked for ${dname} on ${date}`,
      from: '8668838262',
      to: phone,
    });

    res.status(200).json({ message: 'Message sent and user saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending message and saving user' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
