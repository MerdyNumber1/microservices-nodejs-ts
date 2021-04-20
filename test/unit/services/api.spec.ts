import { ServiceBroker, Errors } from 'moleculer';
import axios from 'axios';
import ApiService from './../../../services/api.service';

describe("Test 'api' service", () => {
  const broker = new ServiceBroker({ logger: false });
  broker.createService(ApiService);

  beforeAll(() => broker.start());
  afterAll(() => broker.stop());

  describe("Test 'api POST / handler' validation", () => {
    it('should return 2xx status code', async (done) => {
      try {
        axios.post(`http://localhost:${process.env.HTTP_PORT || 8080}/`, {
          message: '123',
          user: 'alex',
          timestamp: Date.now(),
        });
        done();
      } catch (e) {
        done(Errors.ValidationError);
      }
    });

    it('should return 422 status code due to validation error', async (done) => {
      try {
        axios.post(`http://localhost:${process.env.HTTP_PORT || 8080}/`, {
          message: '123',
          timestamp: Date.now(),
        });
        done(Errors.ValidationError);
      } catch (e) {
        done();
      }
    });
  });
});
