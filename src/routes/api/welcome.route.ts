import express from 'express';
import { Request, Response } from 'express';

const welcome = express.Router();

//Receiving the request
welcome.get('/', (req: Request, res: Response): void => {
  //Sending a welcome text to the client side
  res.send('<p>Welcome to Image Processing API.</p>');
});

export default welcome;
