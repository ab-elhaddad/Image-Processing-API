import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('Testing validate middleware', (): void => {
  //Testing when the filename not entered
  it('Should tell the user to enter image name', async (): Promise<void> => {
    const res = await request.get('/resize');
    expect(res.text).toBe('You have to enter the image name!');
  });

  //Testing when the entered image does not exist im my images
  it('Should tell the user to enter a valid image name', async (): Promise<void> => {
    const res = await request.get('/resize?filename=hello');
    expect(res.text).toBe('Enter an image that does exist!');
  });

  //Testing when the width and heigth not entered
  it('Should tell the user to enter height and width', async (): Promise<void> => {
    const res = await request.get('/resize?filename=fjord');
    expect(res.text).toBe('You have to enter the width and the height!');
  });

  //Testing when the width and heigth are not numbers
  it('Should tell the user to enter only numbers for height and width', async (): Promise<void> => {
    const res = await request.get(
      '/resize?filename=fjord&width=aa&height=1000'
    );
    expect(res.text).toBe('Width and Height must be positive numbers!');
  });

  //Testing when the width and heigth are less than zero
  it('Should tell the user to enter only positive numbers for height and width', async (): Promise<void> => {
    const res = await request.get(
      '/resize?filename=fjord&width=-10&height=1000'
    );
    expect(res.text).toBe('Width and Height must be positive numbers!');
  });
});
