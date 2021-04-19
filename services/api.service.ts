import { Service as BaseService } from 'moleculer';
import ApiGateway from 'moleculer-web';
import { Service, Action } from 'moleculer-decorators';

@Service({
  name: 'api',
  mixins: [ApiGateway],
  settings: {
    port: process.env.PORT || 3000,
    routes: [
      //...
    ],
  },
})
export default class ApiService extends BaseService {
  @Action()
  Login2(ctx: any) {
    console.log(ctx);
  }
}
