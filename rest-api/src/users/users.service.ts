import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    private readonly users: User[] = [];
  
    create(createUserDto: CreateUserDto): User {
      var user = {
        id: this.users.length + 1,
        name: createUserDto.name,
        vote: createUserDto.vote
      } as User;
      this.users.push(user);
      return user;
    }
  
    findAll(): User[] {
      return this.users.filter((obj) => obj);
    }

    findOne(id: number): User {
      return this.users[id - 1];
    }

    update(id: number, createUserDto: CreateUserDto): User {
      var index = id - 1;
      var currentUser = this.users[index];
      if (currentUser == null) {
        return null;
      }
      
      var newUser = {
        id: currentUser.id,
        name: createUserDto.name,
        vote: createUserDto.vote
      } as User;
      this.users[index] = newUser;
      return newUser;
    }

    remove(id: number): boolean {
      var index = id - 1;
      var user = this.users[index];
      if (user == null) {
        return false;
      }
      delete this.users[index];
      return true;
    }
}
