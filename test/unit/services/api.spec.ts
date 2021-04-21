process.env.HTTP_PORT = '0';

import { ServiceBroker } from 'moleculer';
import ApiService from './../../../services/api.service';
import OutputService from '../../../services/output.service';
import request from 'supertest';

describe("Test 'api' service", () => {
  const broker = new ServiceBroker({ logger: true });
  const apiService = broker.createService(ApiService);
  const outputService = broker.createService(OutputService);

  beforeAll(() => broker.start());
  afterAll(() => broker.stop());

  describe("Test 'api POST / handler' validation", () => {
    it('should return 200 status code', async () => {
      await request(apiService.server)
        .post('/')
        .send({
          message: '123',
          user: 'alex',
          timestamp: Date.now(),
        })
        .expect(200);
    });

    it('should return 422 status code due to validation error', async () => {
      await request(apiService.server)
        .post('/')
        .send({
          message: '123',
          timestamp: Date.now(),
        })
        .expect(422);
    });
  });
});
