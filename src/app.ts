
import express from 'express';
import cors from 'cors';
import routes from './routes'
import * as dotenv from 'dotenv';

class App {
    public express: express.Application;
    public constructor() 
    {
      this.express = express();
      this.middleware();
      this.routes();
    }
    private middleware() : void 
    {
      this.express.use(express.json());
      this.express.use(cors());
      this.express.use(this.loggerMiddleware);
      dotenv.config();
    }
    private routes(): void 
    {
      this.express.use(routes)
    }
    private loggerMiddleware(request: express.Request, response: express.Response, next) 
    {
      console.log(`${request.method} ${request.path}`);
      next();
    }
}

export default new App().express