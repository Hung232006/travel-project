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
}