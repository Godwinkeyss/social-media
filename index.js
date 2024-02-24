const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth.js')
const app = express();

dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.Mongo_Db)
  .then(() => {
    console.log('db connected successfully');
  })
  .catch((err) => {
    console.log(err);
  });

  app.use('/api/users',authRouter)

const PORT = 5000;

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
