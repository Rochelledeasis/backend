import express from 'express';
import cors from 'cors';

import bookRoutes from './routes/bookRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import userRoutes from './routes/userRoutes.js';

let corsOptions = {
    origin: ['http://localhost:5173', 'http://192.168.192.197:5173/']
};

//create express app
const app = express();

//to parse incoming data
app.use(express.json());
app.use(cors(corsOptions));

/*routes implementation*/
app.use('/book', bookRoutes);
app.use('/student', studentRoutes);
app.use('/user', userRoutes);

try {
    const port = 3000; //Define port variable
    app.listen(port, () => {
        console.log(`listen to port ${port}...`);
    });
} catch (e) {
    console.log(e);
}
