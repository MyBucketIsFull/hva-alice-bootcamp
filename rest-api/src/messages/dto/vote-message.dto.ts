import { ApiModelProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class VoteMessageDto {
    @ApiModelProperty()
    @IsInt()
    readonly user_id: number;
}
