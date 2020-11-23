import * as express from 'express';
import Bootstrap from './Kernel';
import Locals from './Locals';
import Routes from './Routes';

class Express {
  public express: express.Application;
  constructor() {
    this.express = express();
    this.mountDotEnv();
    this.mountMiddlewares();
    this.mountRoutes();
  }
  private mountDotEnv(): void {
    this.express = Locals.init(this.express);
  }
  private mountMiddlewares(): void {
    this.express = Bootstrap.init(this.express);
  }
  private mountRoutes(): void {
    this.express = Routes.mountApi(this.express);
  }
  public init(): any {
    const port: number | string = Locals.config().port;
    let stringifyPort: string;
    port ? (stringifyPort = `${port}`) : (stringifyPort = '');
    const hostname: string = Locals.config().appUri;
    this.express.listen(process.env.PORT || port, () => {
      return console.log('\x1b[33m%s\x1b[0m', `Server @ '${hostname}' :: Listening @ '${stringifyPort}'`);
    });
  }
}

export default new Express();