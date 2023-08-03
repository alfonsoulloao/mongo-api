/* eslint-disable prettier/prettier */
import { Controller,Post,Res,HttpStatus,Body,Get,NotFoundException,Param,Delete,Query,Put,
} from '@nestjs/common';
import { LogBundleDto } from './dto/logBundle.dto';
import { BundleService } from './bundle.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Logs')
@Controller('bundle')
export class BundleController {
  constructor(private logBundleServices: BundleService) {}

  @Post('/createLog')
  async createLogPost(@Res() res, @Body() createLogBundleDto: LogBundleDto) {
    //console.log(createLogBundleDto);
    const logBundle = await this.logBundleServices.createLogBundle(
      createLogBundleDto,
    );
    return res.status(HttpStatus.OK).json({
      message: 'recived',
      log: logBundle,
    });
  }

  @Get('/allLogs')
  async getLogBundles(@Res() res) {
    const logBundle = await this.logBundleServices.getLogBundles();
    return res.status(HttpStatus.OK).json({
      logBundle: logBundle,
    });
  }

  @ApiParam( {name: 'logId'} )
  @Get('/:logId')
  async getBundle(@Res() res, @Param('logId') logId) {
    const logBundle = await this.logBundleServices.getLogBundle(logId);
    if (!logBundle) throw new NotFoundException('Log bundle does not exist');
    return res.status(HttpStatus.OK).json(logBundle);
  }
 

  @ApiParam( {name: 'logId'} )
  @Delete('/delete')
  async deleteLogBundle(@Res() res, @Query('logId') logId) {
    const logBundleDeleted = await this.logBundleServices.deleteLogBundle(logId);
    if(!logBundleDeleted) throw new NotFoundException('Log bundle does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'recived',
      logBundleDeleted: logBundleDeleted
    });
  }

  @ApiParam( {name: 'logId'} )
  @Put('/updateLog')
  async updateLogBundle(@Res() res,@Body()createLogBondleDto: LogBundleDto ,@Query('logId') logId) {
    const updatelogBundle = await this.logBundleServices.updateLogBundle(logId, createLogBondleDto);
    if(!updatelogBundle) throw new NotFoundException('Log bundle does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'recived',
      updatelogBundle: updatelogBundle
    });
  }



}
