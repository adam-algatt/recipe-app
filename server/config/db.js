const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB Connected: ${connection.connection.host} `);
    } catch (e) {
        console.error(`error ${e.code}: ${e.message}`)
        process.exit()
    }
}

module.exports = connectDB;