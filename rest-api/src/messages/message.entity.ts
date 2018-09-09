import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToMany(type => User, user => user.voted)
  @JoinTable()
  votes: User[];

  @OneToOne(type => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;
}
