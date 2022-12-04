import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller('spending')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getAll')
  async getAll(): Promise<[]> {
    return this.appService.getAll();
  }
}
