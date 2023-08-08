/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

/* eslint-disable prettier/prettier */
export class LogBundleDto {
    
    @ApiProperty()
    @IsNotEmpty()
    @Length(20)
    date: string;

    @ApiProperty()
    @IsNotEmpty()
    @Length(5,15)
    servicio:string;

    @ApiProperty()
    @IsNotEmpty()
    @Length(10, 20)
    destination: string;

    @ApiProperty()
    @IsNotEmpty()
    idServiceRequest:string

    @ApiProperty()
    @IsNotEmpty()
    bundle: string;
}
