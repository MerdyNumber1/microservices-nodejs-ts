process.env.HTTP_PORT = '0';

import { ServiceBroker } from 'moleculer';
import ApiService from './../../../services/api.service';
import OutputService from '../../../services/output.service';
import request from 'supertest';

describe("Test 'api' service", () => {
  const broker = new ServiceBroker({ logger: false });
  const apiService = broker.createService(ApiService);
  const outputService = broker.createService(OutputService);

  beforeAll(() => broker.start());
  afterAll(() => broker.stop());

  const requestBody = {
    message: 'test',
    user: 'alex',
    timestamp: Date.now(),
  };

  describe("Test 'api POST / handler' validation", () => {
    it('should return 200 status code', async () => {
      await request(apiService.server).post('/').send(requestBody).expect(200);
    });
  });
});
