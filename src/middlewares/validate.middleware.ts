import express, { NextFunction } from 'express';
import fs from 'fs';
import { Request, Response } from 'express';

const validate = express.Router();

validate.get(
  '/resize',
  (req: Request, res: Response, next: NextFunction): void => {
    const img = req.query.filename;
    const height = req.query.height as unknown as number;
    const width = req.query.width as unknown as number;

    //--Checking whether the information is valid or not--

    //Checking whether the filename was entered or not
    if (img === undefined) res.send('You have to enter the image name!');
    //Checking whether the entered image does exist im my images
    else if (!fs.existsSync('imgs/' + img + '.jpg'))
      res.send('Enter an image that does exist!');
    //Checking whether the width and heigth were entered or not
    else if (height === undefined || width === undefined)
      res.send('You have to enter the width and the height!');
    //Checking whether the width and heigth are numbers or not
    else if (isNaN(height) || isNaN(width))
      res.send('Width and Height must be positive numbers!');
    //Checking whether the width and heigth are greater than zero or not
    else if (height <= 0 || width <= 0)
      res.send('Width and Height must be positive numbers!');
    //If the information is correct and complete the application will procced
    else next();
  }
);

export default validate;
