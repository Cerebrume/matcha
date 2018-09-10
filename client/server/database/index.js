//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//your local database url
//27017 is the default mongoDB port
// const uri = 'mongodb://localhost:27017/matcha' 
const uri = 'https://api.mlab.com/api/1/databases?apiKey=pTL52ZoZgStvFx7GWV1AZTJDQDEbpUqa'
mongoose.set('useFindAndModify', false)

mongoose.connect(uri, {useNewUrlParser: true }).then(
  () => { 
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
    console.log('Connected to Mongo')
  },
  err => {
    /** handle initial connection error */ 
    console.log('error connecting to Mongo: ')
    console.log(err)
  }
)


module.exports = mongoose.connection