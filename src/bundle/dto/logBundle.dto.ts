/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

/* eslint-disable prettier/prettier */
export class LogBundleDto {
    @ApiProperty()
    date: string;

    @ApiProperty()
    destination: string;

    @ApiProperty()
    bundle: string;
}
