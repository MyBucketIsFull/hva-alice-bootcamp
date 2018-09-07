import { Module } from '@nestjs/common';
import { UsersModule } from 'users/users.module';
import { AppController } from 'app/app.controller';
import { AppService } from './app.service';
import { MessagesModule } from 'messages/messages.module';

@Module({
  imports: [UsersModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
