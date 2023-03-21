import {StatusCode, MtResponse, MtRequest} from '../../types';

class _ChatGPTController {
  public async conversation(request: MtRequest<any>): Promise<MtResponse<any>> {
    try {
      const result = {};
      return {
        statusCode: StatusCode.SUCCESS,
        body: {
          data: {
            data: {result},
            settings: {
              success: result ? 1 : 0,
              message: result ? 'Advantage available' : 'Advantage not found!',
            },
          },
          status: 'success',
        },
      };
    } catch (error: any) {
      return {
        statusCode: StatusCode.BAD_REQUEST,
        body: {
          status: 'error',
          message: error.message,
        },
      };
    }
  }
}

export const ChatGPTController = new _ChatGPTController();
