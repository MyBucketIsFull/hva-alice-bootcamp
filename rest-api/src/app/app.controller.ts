import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';

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
