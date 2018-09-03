import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiUseTags, ApiModelProperty, ApiImplicitParam } from '@nestjs/swagger';

export class User {
    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly vote: number;
}

@ApiUseTags('users')
@Controller('users')
export class UsersController {
    @Post()
    create(@Body() user: User) {
        return `POST: create - name = ${user.name}, vote = ${user.vote}`;
    }

    @Get()
    findAll() {
        return `GET: findAll`;
    }

    @ApiImplicitParam({ name: 'id', type: 'Number' })
    @Get(':id')
    findOne(@Param() params) {
        return `GET: findOne - id = ${params.id}`;
    }

    @ApiImplicitParam({ name: 'id', type: 'Number' })
    @Put(':id')
        update(@Param('id') id, @Body() user: User) {
        return `PUT: update - id = ${id}, name = ${user.name}, vote = ${user.vote}`;
    }

    @ApiImplicitParam({ name: 'id', type: 'Number' })
    @Delete(':id')
        remove(@Param('id') id) {
        return `DELETE: remove - id = ${id}`;
    }
}
