const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
dotenv.config();
const payOS = require('./utils/payos');

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("CONNECTED TO MONGO DB");
});
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//ROUTES
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);


app.post('/createlink', async (req, res) => {
  const body = {
      orderCode: Number(String(Date.now()).slice(-6)),
      amount: req.body.price,
      description: 'Thanh toan don hang',
      items: [{
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price
      }],
      returnUrl: `${req.body.YOUR_DOMAIN}/pay_success`,
      cancelUrl: `${req.body.YOUR_DOMAIN}/pay_fail`
  };

  try {
      const paymentLinkResponse = await payOS.createPaymentLink(body);
      res.json(paymentLinkResponse.checkoutUrl);  
  } catch (error) {
      console.error(error);
      res.send('Something went error');
  }
});


app.listen(8000, () => {
  console.log("Server is running");
});
