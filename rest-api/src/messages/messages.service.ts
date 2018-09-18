import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { VoteMessageDto } from './dto/vote-message.dto';
import { Message } from './message.entity';
import { User } from '../users/user.entity';

@Injectable()
export class MessagesService {
  constructor(
  @InjectRepository(Message) private readonly messageRepository: Repository<Message>) {}

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    const user = await getRepository(User).findOne(createMessageDto.user_id);
    if (user == null) {
      return null;
    }

    const message = new Message();
    message.text = createMessageDto.text;
    message.user = user;
    const newUser = await this.messageRepository.save(message);
    return await this.findOne(newUser.id);
  }

  async findAll(): Promise<Message[]> {
    return await this.messageRepository.find({ relations: ['user', 'votes'] });
  }

  async findOne(id: number): Promise<Message> {
    return await this.messageRepository.findOne(id, { relations: ['user', 'votes'] });
  }

  async update(id: number, updateMessageDto: UpdateMessageDto): Promise<Message> {
    const message = await this.findOne(id);
    if (message == null) {
      return null;
    }

    message.text = updateMessageDto.text;
    await this.messageRepository.save(message);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const message = await this.findOne(id);
    if (message == null) {
      return false;
    }

    await this.messageRepository.remove(message);
    return true;
  }

  async vote(id: number, voteMessageDto: VoteMessageDto): Promise<Message> {
    const message = await this.findOne(id);
    if (message == null) {
      return null;
    }

    const user = await getRepository(User).findOne(voteMessageDto.user_id);
    if (user == null) {
      return null;
    }

    message.votes.push(user);
    await this.messageRepository.save(message);
    return await this.findOne(id);
  }
}
