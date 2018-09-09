import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiUseTags } from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./user.entity";
import { UsersService } from "./users.service";

@Controller('users')
@ApiUseTags('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @ApiOperation({ title: 'Create user' })
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return await this.usersService.create(createUserDto);
    }

    @Get()
    @ApiOperation({ title: 'Get all users' })
    async findAll(): Promise<User[]> {
        return await this.usersService.findAll();
    }

    @Get(':id')
    @ApiOperation({ title: 'Get user' })
    async findOne(@Param('id') id: number): Promise<any> {
        const user = await this.usersService.findOne(+id);
        return this.checkNull(user);
    }

    @Put(':id')
    @ApiOperation({ title: 'Update user' })
    async update(@Body() updateUserDto: UpdateUserDto, @Param('id') id: number): Promise<any> {
        const user = await this.usersService.update(+id, updateUserDto);
        return this.checkNull(user);
    }

    @Delete(':id')
    @ApiOperation({ title: 'Delete user' })
    async remove(@Param('id') id: number): Promise<String> {
        const success = await this.usersService.remove(+id);
        return this.checkSuccess(success);
    }

    @Patch(':id/like')
    @ApiOperation({ title: 'Add one like to the user' })
    async vote(@Param('id') id: number): Promise<any> {
        const user = await this.usersService.like(+id);
        return this.checkNull(user);
    }

    checkNull(user: User): any {
        return user == null ? 'not found' : user;
    }

    checkSuccess(success: boolean): String {
        return success ? 'success' : 'not found';
    }
}
