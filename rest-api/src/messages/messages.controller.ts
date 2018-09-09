import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiUseTags } from "@nestjs/swagger";
import { CreateMessageDto } from "./dto/create-message.dto";
import { UpdateMessageDto } from "./dto/update-message.dto";
import { VoteMessageDto } from "./dto/vote-message.dto";
import { Message } from "./message.entity";
import { MessagesService } from "./messages.service";

@Controller('messages')
@ApiUseTags('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}

    @Post()
    @ApiOperation({ title: 'Create message' })
    async create(@Body() createMessageDto: CreateMessageDto): Promise<Message> {
        const message = await this.messagesService.create(createMessageDto);
        return this.checkNull(message);
    }

    @Get()
    @ApiOperation({ title: 'Get all messages' })
    async findAll(): Promise<Message[]> {
        return await this.messagesService.findAll();
    }

    @Get(':id')
    @ApiOperation({ title: 'Get message' })
    async findOne(@Param('id') id: number): Promise<any> {
        const message = await this.messagesService.findOne(+id);
        return this.checkNull(message);
    }

    @Put(':id')
    @ApiOperation({ title: 'Update message' })
    async update(@Body() updateMessageDto: UpdateMessageDto, @Param('id') id: number): Promise<any> {
        const message = await this.messagesService.update(+id, updateMessageDto);
        return this.checkNull(message);
    }

    @Delete(':id')
    @ApiOperation({ title: 'Delete message' })
    async remove(@Param('id') id: number): Promise<String> {
        const success = await this.messagesService.remove(+id);
        return this.checkSuccess(success);
    }

    @Patch(':id/vote')
    @ApiOperation({ title: 'Add one vote to the message' })
    async vote(@Body() voteMessageDto: VoteMessageDto, @Param('id') id: number): Promise<any> {
        const message = await this.messagesService.vote(+id, voteMessageDto);
        return this.checkNull(message);
    }

    checkNull(message: Message): any {
        return message == null ? 'not found' : message;
    }

    checkSuccess(success: boolean): String {
        return success ? 'success' : 'not found';
    }
}
