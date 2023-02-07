import fs from 'fs';
import path from 'path';
import sharpFun from './../../middlewares/sharpFun';

describe('Testing Sharp function', (): void => {
  //Testing when entering valid inputs whether the function works properly or throws error
  it('Should work properly', (): void => {
    expect(async () => {
      await sharpFun('fjord', 150, 150);
    }).not.toThrow();
  });

  //Testing whether the requested image exists in the imgs folder after being processed
  it('Should find the requested image after being processed', (): void => {
    sharpFun('fjord', 200, 200);
    setTimeout((): void => {
      const check = fs.existsSync(path.resolve('imgs/fjord_200_200.jpg'));
      expect(check).toBeTrue();
    }, 100);
  });
});
