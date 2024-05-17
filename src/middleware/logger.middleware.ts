import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddeware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    console.log('request from client  ', req);
    console.log('response from server   ', res);
    next();
  }
}
