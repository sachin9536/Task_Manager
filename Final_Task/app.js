const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect')
require('dotenv').config();




// middlewares
app.use(express.static('./public'))
app.use(express.json());
//routes
app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.use('/api/v1/tasks', tasks);


const PORT = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    } 
}

start(); 
