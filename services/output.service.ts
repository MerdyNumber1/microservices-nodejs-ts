import { Service as BaseService, Context } from 'moleculer';
import { Service, Action, Method } from 'moleculer-decorators';
import { RequestDTO } from 'services/dto';
import { wait } from './utils';

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
  async logRequest({ params }: Context<RequestDTO>) {
    await wait(() => this.logMessage(params), params.message.length * 1e3);
  }

  @Method
  logMessage(message: any) {
    this.logger.info(message);
  }
}
