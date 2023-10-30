const mongoose = require("mongoose");

const app = require('./app')

const DB_HOST = "mongodb+srv://iryna:ysm61MXeqMAAvvmx@cluster0.a01yvau.mongodb.net/db-contacts?retryWrites=true&w=majority"
mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
  .then(() => {
  app.listen(3000)     
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  })
