import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  [x: string]: any;

  @Get()
  root(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'views', 'index.html'));
  }
  @Get('plant')
  plant(@Res() res:Response){
    res.sendFile(join(__dirname, '..', 'views', 'plant.html'));
  }
  @Get('hotel')
  hotel(@Res() res:Response){
    res.sendFile(join(__dirname, '..', 'views', 'hotel.html'));
  }
  @Get('ticket')
  ticket(@Res() res:Response){
    res.sendFile(join(__dirname, '..', 'views', 'ticket.html'));
  }
  
}