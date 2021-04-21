import { Service as BaseService } from 'moleculer';
import ApiGateway from 'moleculer-web';
import { Service } from 'moleculer-decorators';

@Service({
  name: 'api',
  mixins: [ApiGateway],
  settings: {
    port: process.env.HTTP_PORT ?? 8080,
    routes: [
      {
        aliases: {
          'POST /': 'output.logRequest',
        },
      },
    ],
  },
})
export default class ApiService extends BaseService {}
