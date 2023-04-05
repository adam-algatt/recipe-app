const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
const recipeRoutes = require('./routes/recipeRoutes')
const userRoutes = require('./routes/userRoutes')
const uriRoutes = require('./routes/uriroutes')
dotenv.config()


const PORT = process.env.PORT; 
const app = express()

app.use(express.json());
app.use(cors())
connectDB()

app.get('/', (req, res) => {
    res.send({'alert':'api running',
'message':'Api running'})
})
app.use('/api/', recipeRoutes)
app.use('/api/', userRoutes )
app.use('/api/', uriRoutes )
app.listen(PORT, ()=> {
    console.log(`app listening on http://localhost:${PORT}`)
})
