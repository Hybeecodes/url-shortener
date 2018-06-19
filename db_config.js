const mongoose = require('mongoose');
const cred = require('./cred');

// mongoose.connect('mongodb://localhost/url_shortner').then(()=>{
//   console.log('successfully connected to the database')
// }).catch((err)=>{
//   console.log('An error occured: '+err);
// })
mongoose.connect(`mongodb://${cred.DB_USER}:${cred.DB_PASS}@ds163410.mlab.com:63410/url_shortner`).then(()=>{
  console.log('successfully connected to the database')
}).catch((err)=>{
  console.log('An error occured: '+err);
})