import {Router} from 'express';
import {ChatGptRoute} from './chat-gpt';
class Api {
  public apiRouter = Router();
  constructor() {
    this.initate();
  }
  private initate(): void {
    this.apiRouter.use('/chat-gpt', ChatGptRoute);
  }
}

export default new Api().apiRouter;
