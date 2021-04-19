import { Service as BaseService } from 'moleculer';
import { Service, Action } from 'moleculer-decorators';

@Service({
  name: 'output',
  settings: {
    port: 3000,
    routes: [
      //...
    ],
  },
})
export default class OutputService extends BaseService {
  @Action()
  Login2(ctx: any) {
    console.log(ctx);
  }
}
