import supertest from 'supertest';
import app from '../../../index';

const request = supertest(app);

describe('Display Route', (): void => {
  //Testing whe entering valid filename ,width and height
  it('Should return the requested image', async (): Promise<void> => {
    const res = await request.get(
      '/resize?filename=fjord&width=300&height=500'
    );
    expect(res.type).toBe('image/jpeg');
  });
});
