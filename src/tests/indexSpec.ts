import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Server Testing - Should return staus code equal to 200 from every route', (): void => {
  it('Welcome path', async (): Promise<void> => {
    const res = await request.get('/');
    expect(res.status).toBe(200);
  });
  it('Resize path', async (): Promise<void> => {
    const res = await request.get('/resize');
    expect(res.status).toBe(200);
  });
  it('Invalid path', async (): Promise<void> => {
    const res = await request.get('/hello');
    expect(res.status).toBe(200);
  });
});
