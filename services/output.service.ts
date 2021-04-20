import { Service as BaseService, Context } from 'moleculer';
import { Service, Action, Method } from 'moleculer-decorators';
import { RequestDTO } from 'services/dto';

@Service({
  name: 'output',
  settings: {},
})
export default class OutputService extends BaseService {
  @Action({
    params: {
      timestamp: 'number',
      user: 'string',
      message: 'string',
    },
  })
  logRequest({ params }: Context<RequestDTO>) {
    setTimeout(() => this.logMessage(params), params.message.length * 1e3);
  }

  @Method
  logMessage(message: any) {
    console.log(message);
  }
}
