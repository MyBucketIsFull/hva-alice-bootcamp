import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateUserDto {
    @ApiModelProperty()
    @IsString()
    readonly name: string;
}
