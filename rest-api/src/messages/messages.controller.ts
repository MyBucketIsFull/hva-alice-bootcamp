import { Controller, Post, Get, Put, Delete, Body, Param, Patch } from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { Message } from './interfaces/message.interface';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
@ApiUseTags('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}

    @Post()
    @ApiOperation({ title: 'Create message' })
    create(@Body() createMessageDto: CreateMessageDto): Message {
        return this.messagesService.create(createMessageDto);
    }

    @Get()
    @ApiOperation({ title: 'Get all messages' })
    findAll(): Message[] {
        return this.messagesService.findAll();
    }

    @Get(':id')
    @ApiOperation({ title: 'Get message' })
    findOne(@Param('id') id: number): any {
        var message = this.messagesService.findOne(+id);
        if (message == null) {
            return 'not found';
        }
        return message;
    }

    @Put(':id')
    @ApiOperation({ title: 'Update message' })
    update(@Body() createMessageDto: CreateMessageDto, @Param('id') id: number): any {
        var message = this.messagesService.update(+id, createMessageDto);
        if (message == null) {
            return 'not found';
        }
        return message;
    }

    @Delete(':id')
    @ApiOperation({ title: 'Delete message' })
    async remove(@Param('id') id: number): Promise<String> {
        var success = this.messagesService.remove(+id);
        if (!success) {
            return 'not found';
        }
        return 'success';
    }

    @Patch(':id/vote')
    @ApiOperation({ title: 'Add one vote to the message' })
    vote(@Param('id') id: number): any {
        var message = this.messagesService.vote(+id);
        if (message == null) {
            return 'not found';
        }
        return message;
    }
}
