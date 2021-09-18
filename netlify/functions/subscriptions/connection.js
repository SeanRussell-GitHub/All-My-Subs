const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/test');

const Subscription = mongoose.model('Subscription', { name: String, value: Number });


module.exports = {
    mongoose, Subscription
}