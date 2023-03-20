import mongoose, { connect } from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`mongoDB connected: ${conn.connection.host}`.cyan.underline)
    } catch (err) {
        console.error(`error: ${err.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB
