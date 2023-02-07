import supertest from 'supertest';
import app from '../../../index';

const request = supertest(app);

describe('Invalid route', (): void => {
  //Testing when entering invalid URL
  it('Should return warning text', async (): Promise<void> => {
    const res = await request.get('/hello');
    expect(res.text).toBe('You have entered unvalid URL!');
  });
});
