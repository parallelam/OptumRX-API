import { Application } from 'express';
import CORS from './CORS';
import Http from './Http';
import Locals from './Locals';

class Kernel {
  public static init(_express: Application): Application {
    if (Locals.config().isCORSEnabled) {
      _express = CORS.mount(_express);
    }
    _express = Http.mount(_express);
    return _express;
  }
}

export default Kernel;