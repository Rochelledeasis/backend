import express from 'express';
import studentRoutes from './routes/studentRoutes.js';

//create express app
const app = express();

/*routes implementation*/
app.use('/student', studentRoutes);

try {
    const port = 3000; //Define port variable
    app.listen(port, () => {
        console.log(`listen to port ${port}...`);
    });
} catch (e) {
    console.log(e);
}
