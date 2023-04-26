require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB)
.then(res =>{console.log('DB is connected')})
.catch(err => {console.log(err)});