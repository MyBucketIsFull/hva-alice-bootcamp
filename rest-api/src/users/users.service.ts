import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}
  
  async create(ceateUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.name = ceateUserDto.name;
    user.vote = 0;
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    if (user == null) {
      return null;
    }

    user.name = updateUserDto.name;
    return await this.userRepository.save(user);
  }

  async remove(id: number): Promise<boolean> {
    const user = await this.findOne(id);
    if (user == null) {
      return false;
    }

    await this.userRepository.delete(id);
    return true;
  }

  async vote(id: number): Promise<User> {
    const user = await this.findOne(id);
    if (user == null) {
      return null;
    }
    
    user.vote += 1;
    await this.userRepository.update(id, user);
    return user;
  }
}
