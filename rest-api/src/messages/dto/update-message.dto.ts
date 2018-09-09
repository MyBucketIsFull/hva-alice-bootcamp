import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateMessageDto {
    @ApiModelProperty()
    @IsString()
    readonly text: string;
}
