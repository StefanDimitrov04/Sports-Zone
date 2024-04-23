const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const { auth } = require('./middlewares/authMiddleware');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.use(auth);
app.use('/api', routes);

mongoose.connect('mongodb://127.0.0.1:27017/sportNews')
.then(() => {
    console.log("db connected");
}).catch((err) => {
    console.log(err);
});

app.get('/', (req,res) => {
    res.send('hello');
});

app.listen(3000, () => {
    console.log('app is listening on port 3000');
});

