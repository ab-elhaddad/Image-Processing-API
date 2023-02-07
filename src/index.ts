import express from 'express';
import validate from './middlewares/validate.middleware';
import display from './routes/api/display.route';
import welcome from './routes/api/welcome.route';
import invalid from './routes/api/invalid.route';
import resize from './middlewares/resize.middleware';

const app = express();
const port = 3000;

//Displayig Welcome page
app.get('/', welcome);

//Displaying image after processing
app.get('/resize', validate, resize, display);

//Warning the user when he inputs invalid URL
app.use(invalid);

//Initalizing the server and listening on port 3000
app.listen(port, (): void => {
  console.log('Listening on port 3000');
});

export default app;
