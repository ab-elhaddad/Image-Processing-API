import supertest from 'supertest';
import app from '../../../index';

const request = supertest(app);

describe('Welcome Route', (): void => {
  //Testing when entering the welcome page
  it('Should display welcome text', async (): Promise<void> => {
    const res = await request.get('/');
    expect(res.text).toBe('<p>Welcome to Image Processing API.</p>');
  });
});
