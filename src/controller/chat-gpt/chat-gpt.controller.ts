import {StatusCode, MtResponse, MtRequest} from '../../types';
const {NlpManager} = require('node-nlp');
const nlp = require('spacy-nlp');
const serverPromise = nlp.server({port: 6466});

class _ChatGPTController {
  public async conversation(request: MtRequest<any>): Promise<MtResponse<any>> {
    try {
      //console.log({request: request.body});
      const text =
        'The first phase of the Cold War began in the first two years after the end of the Second World War in 1945. The USSR consolidated its control over the states of the Eastern Bloc, while the United States began a strategy of global containment to challenge Soviet power, extending military and financial aid to the countries of Western Europe (for example, supporting the anti-communist side in the Greek Civil War) and creating the NATO alliance.';

      const options = ['word'];

      const output = await nlp.parse_date(text, options);
      console.log({output});

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

  public async conversation1(
    request: MtRequest<any>
  ): Promise<MtResponse<any>> {
    try {
      //console.log({request: request.body});
      const manager = new NlpManager({languages: ['en'], forceNER: true});
      // Adds the utterances and intents for the NLP
      manager.addDocument('en', 'goodbye for now', 'greetings.bye');
      manager.addDocument('en', 'bye bye take care', 'greetings.bye');
      manager.addDocument('en', 'okay see you later', 'greetings.bye');
      manager.addDocument('en', 'bye for now', 'greetings.bye');
      manager.addDocument('en', 'i must go', 'greetings.bye');
      manager.addDocument('en', 'hello', 'greetings.hello');
      manager.addDocument('en', 'hi', 'greetings.hello');
      manager.addDocument('en', 'howdy', 'greetings.hello');
      // Train also the NLG
      manager.addAnswer('en', 'greetings.bye', 'Till next time');
      manager.addAnswer('en', 'greetings.bye', 'see you soon!');
      manager.addAnswer('en', 'greetings.hello', 'Hey there!');
      manager.addAnswer('en', 'greetings.hello', 'Greetings!');
      // Train and save the model.
      (async () => {
        await manager.train();
        manager.save();
        const response = await manager.process('en', 'goodbye for now');
        console.log(response);
      })();

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
