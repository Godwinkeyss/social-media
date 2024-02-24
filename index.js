const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth.js')
const userRouter = require('./routes/userRoutes.js')
const app = express();

dotenv.config();



mongoose
  .connect(process.env.Mongo_Db)
  .then(() => {
    console.log('db connected successfully');
  })
  .catch((err) => {
    console.log(err);
  });
  app.use(express.json());
  
  app.use('/api/auth',authRouter)
  app.use('/api/users',userRouter)

const PORT = 5000;

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
