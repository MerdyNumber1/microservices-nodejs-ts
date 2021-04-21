process.env.HTTP_PORT = '1';

import { ServiceBroker } from 'moleculer';
import ApiService from './../../../services/api.service';
import OutputService from '../../../services/output.service';
import request from 'supertest';

describe("Test 'output' service", () => {
  const broker = new ServiceBroker({ logger: false });
  const apiService = broker.createService(ApiService);
  const outputService = broker.createService(OutputService);

  beforeAll(() => broker.start());
  afterAll(() => broker.stop());

  const requestBody = {
    message: '123',
    user: 'alex',
    timestamp: Date.now(),
  };

  describe("Test 'output to the console after a certain time'", () => {
    it('should return response after waiting with max delay 1000ms', async (done) => {
      const startTime = Date.now();

      await request(apiService.server)
        .post('/')
        .send(requestBody)
        .expect(200)
        .expect(() => {
          const endTime = Date.now();
          const latency = endTime - startTime - requestBody.message.length * 1e3;

          if (latency > 0 && latency < 1000) {
            done();
          }
        });
    });
  });
});
