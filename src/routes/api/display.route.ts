import express from 'express';
import path from 'path';
import { Request, Response } from 'express';

const display = express.Router();

//Receiving the request
display.get('/resize', (req: Request, res: Response): void => {
  const img = req.query.filename;
  const width = req.query.width;
  const height = req.query.height;

  //Sending the requested image to the client side
  res.sendFile(
    path.resolve('imgs/' + img + '_' + width + '_' + height + '.jpg')
  );
});

export default display;
