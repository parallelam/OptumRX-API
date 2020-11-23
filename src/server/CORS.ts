import * as cors from 'cors';
import { Application } from 'express';
import Locals from './Locals';

class CORS {
  public mount(_express: Application): Application {
    const options = {
      origin: Locals.config().url,
      optionsSuccessStatus: 200
    };
    _express.use(cors(options));
    return _express;
  }
}

export default new CORS();