import { Injectable } from '@nestjs/common';
import { Message } from './interfaces/message.interface';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessagesService {
    private readonly messages: Message[] = [];
  
    create(createMessageDto: CreateMessageDto): Message {
      var message = {
        id: this.messages.length + 1,
        text: createMessageDto.text,
        vote: 0,
        user_id: createMessageDto.user_id,
      } as Message;
      this.messages.push(message);
      return message;
    }
  
    findAll(): Message[] {
      return this.messages.filter((obj) => obj);
    }

    findOne(id: number): Message {
      return this.messages[id - 1];
    }

    update(id: number, createMessageDto: CreateMessageDto): Message {
      var index = id - 1;
      var currentMessage = this.messages[index];
      if (currentMessage == null) {
        return null;
      }
      
      var newMessage = {
        id: currentMessage.id,
        text: createMessageDto.text,
        vote: currentMessage.vote,
        user_id: createMessageDto.user_id,
      } as Message;
      this.messages[index] = newMessage;
      return newMessage;
    }

    remove(id: number): boolean {
      var index = id - 1;
      var message = this.messages[index];
      if (message == null) {
        return false;
      }
      delete this.messages[index];
      return true;
    }

    vote(id: number): Message {
      var message = this.messages[id - 1];
      if (message == null) {
        return null;
      }
      message.vote += 1;
      return message;
    }
}
