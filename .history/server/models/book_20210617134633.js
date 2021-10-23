let mongoose = require('mongoose');

//create model class
let contactModel = mongoose.Schema({
    name : String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
    collection:"contacts"
}
)

module.exports = mongoose.model('Contact',bookModel);