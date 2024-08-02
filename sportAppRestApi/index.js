// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// // const { auth } = require('./middlewares/authMiddleware');
// const routes = require('./routes');

// const app = express();
// app.use(cors());
// // app.use(cors({
// //     origin: 'https://sports-zone-d6zj.vercel.app'
// //   }));
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

// // app.use(auth);
// app.use('/api', routes);

// mongoose.connect('mongodb://127.0.0.1:27017/sportNews')
// .then(() => {
//     console.log("db connected");
// }).catch((err) => {
//     console.log(err);
// });

// app.get('/', (req,res) => {
//     res.send('hello');
// });

// app.listen(3000, () => {
//     console.log('app is listening on port 3000');
// });

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
app.use(cors());
// app.use(cors({
//     origin: 'https://sports-zone-seven.vercel.app/' // Update with your actual Vercel deployment URL
// }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

mongoose.connect(process.env.MONGO_ATLAS_URL)
.then(() => {
    console.log("db connected");
})
.catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit the process with an error
});

app.get('/', (req, res) => {
    res.send('hello');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

