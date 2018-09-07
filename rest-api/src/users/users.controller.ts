import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
@ApiUseTags('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @ApiOperation({ title: 'Create user' })
    create(@Body() createUserDto: CreateUserDto): User {
        return this.usersService.create(createUserDto);
    }

    @Get()
    @ApiOperation({ title: 'Get all users' })
    findAll(): User[] {
        return this.usersService.findAll();
    }

    @Get(':id')
    @ApiOperation({ title: 'Get user' })
    findOne(@Param('id') id: number): any {
        var user = this.usersService.findOne(+id);
        if (user == null) {
            return 'not found';
        }
        return user;
    }

    @Put(':id')
    @ApiOperation({ title: 'Update user' })
    update(@Body() createUserDto: CreateUserDto, @Param('id') id: number): any {
        var user = this.usersService.update(+id, createUserDto);
        if (user == null) {
            return 'not found';
        }
        return user;
    }

    @Delete(':id')
    @ApiOperation({ title: 'Delete user' })
    async remove(@Param('id') id: number): Promise<String> {
        var success = this.usersService.remove(+id);
        if (!success) {
            return 'not found';
        }
        return 'success';
    }
}
