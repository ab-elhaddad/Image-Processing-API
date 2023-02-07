import express from 'express';
import { Request, Response } from 'express';

const invalid = express.Router();

//Receiving the request
invalid.use((req: Request, res: Response): void => {
  //Sending a warning to the client side with 404 status code
  res.send('You have entered unvalid URL!');
});

export default invalid;
