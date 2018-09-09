import { ApiModelProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateMessageDto {
    @ApiModelProperty()
    @IsString()
    readonly text: string;

    @ApiModelProperty()
    @IsInt()
    readonly user_id: number;
}
