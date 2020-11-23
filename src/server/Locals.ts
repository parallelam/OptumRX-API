import { Application } from 'express';
import * as dotenv from 'dotenv';

class Locals {
  public static config(): any {
    dotenv.config();
    const environment = process.env.NODE_ENV;
    const port = process.env.APP_PORT;
    const appUri = process.env.APP_URI;
    const isCORSEnabled = process.env.CORS_ENABLED;
    const apiPrefix = process.env.API_PREFIX;

    return {
      environment,
      port,
      appUri,
      isCORSEnabled,
      apiPrefix
    };
  }

  public static init(_express: Application): Application {
    _express.locals.app = this.config();
    return _express;
  }
}

export default Locals;