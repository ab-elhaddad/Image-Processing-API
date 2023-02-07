import supertest from 'supertest';
import app from '../../index';
import fs from 'fs';
import path from 'path';

const request = supertest(app);

describe('Testing resize middleware', (): void => {
  //Testing when that processing a new image works
  it('Should find the requested image ready in imgs folder', async (): Promise<void> => {
    await request.get('/resize?filename=fjord&width=300&height=500');
    expect(fs.existsSync(path.resolve('imgs/fjord_300_500.jpg'))).toBeTrue();
  });
});
