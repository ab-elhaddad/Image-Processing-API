import express from 'express';
import { Request, Response } from 'express';
import { NextFunction } from 'express';
import fs from 'fs';
import sharpFun from './sharpFun';

const resize = express();
resize.use((req: Request, res: Response, next: NextFunction): void => {
  const img = req.query.filename as unknown as string;

  //Convering width and height to numbers to use in Sharp
  const height = req.query.height as unknown as number;
  const width = req.query.width as unknown as number;

  //Checking whether the requested image is cached or not
  if (!fs.existsSync('imgs/' + img + '_' + width + '_' + height + '.jpg')) {
    //Generating new image and storing it
    sharpFun(img, height, width);
  }
  setTimeout(next, 100);
});

export default resize;
