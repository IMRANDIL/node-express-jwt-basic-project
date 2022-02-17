require('dotenv').config();


const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')

const router = require('./routes/main')

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(cors())
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.json());

app.use('/api/v1', router)



app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();