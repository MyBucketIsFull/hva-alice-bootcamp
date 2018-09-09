import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Message } from '../messages/message.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  like: number;

  @ManyToMany(type => Message, message => message.votes)
  voted: Message[];
}
