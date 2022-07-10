const mongoose = require('mongoose')

const connection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected ${conn.connection.host}`.cyan.underline.bold)
    } catch (error) {
        console.log('error', error)
    }
}

module.exports = connection  