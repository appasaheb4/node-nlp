import {responseHandler} from './../../response-handler/index';
import {Router} from 'express';
import {ChatGPTController} from '../../controller/chat-gpt/chat-gpt.controller';

class ChatGptRoutes {
  public ChatGptRouter: Router;
  constructor() {
    this.ChatGptRouter = Router();
    this.initate();
  }
  private initate(): void {
    this.ChatGptRouter.post(
      '/conversation',
      responseHandler(ChatGPTController.conversation)
    );
  }
}

const ChatGptRoute = new ChatGptRoutes().ChatGptRouter;
export {ChatGptRoute};
