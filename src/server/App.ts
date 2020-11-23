import * as dotenv from 'dotenv';
import Express from './Express';

class App {
  public loadServer(): void {
    Express.init();
  }
  public loadConfiguration(): void {
    dotenv.config();
  }
}

export default new App();