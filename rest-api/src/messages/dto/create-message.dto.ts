import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateMessageDto {
    @ApiModelProperty()
    @IsString()
    readonly text: string;

    @ApiModelProperty()
    @IsString()
    readonly user_id: number;
}
