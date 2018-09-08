import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
@ApiUseTags('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ title: 'Home page' })
  root(): string {
    return this.appService.root();
  }
}
