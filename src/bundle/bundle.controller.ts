/* eslint-disable prettier/prettier */
import { Controller,Post,Res,HttpStatus,Body,Get,NotFoundException,Param,Delete,Query,Put, UseInterceptors, UseGuards,
} from '@nestjs/common';
import { LogBundleDto } from './dto/logBundle.dto';
import { BundleService } from './bundle.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { LoggerInterceptor } from 'src/utils/logger.interceptor';
import { ApplicationGuardGuard } from 'src/guards/application-guard.guard';

@ApiTags('Logs')
@UseInterceptors(LoggerInterceptor)
@UseGuards(ApplicationGuardGuard)
@Controller('bundle')
export class BundleController {
  constructor(private logBundleServices: BundleService) {}

  @Post('/createLog')
  async createLogPost(@Res() res, @Body() createLogBundleDto: LogBundleDto) {    
    try {
      const logBundle = await this.logBundleServices.createLogBundle(createLogBundleDto,);
      return res.status(HttpStatus.CREATED).json({
      message: 'recived',
      log: logBundle,
    });
    } catch (e) {
        res.status(HttpStatus.FORBIDDEN).json({
          message: 'error',
          log: e,
        })
    }}

  @Get('/allLogs')
  async getLogBundles(@Res() res) {
    try{
      const logBundle = await this.logBundleServices.getLogBundles();
      return res.status(HttpStatus.OK).json({
      logBundle: logBundle,
      });
    }
    catch (e) {
      res.status(HttpStatus.FORBIDDEN).json({
        message: 'error',
        log: e,
      })
  }}

  @ApiParam( {name: 'startDate'} )
  @ApiParam( {name: 'endDate'} )
  @Get('/logBundlesByDateRange/:startDate/:endDate')
  async logBundlesByDateRange(@Res() res, @Param('startDate') startDate, @Param('endDate') endDate) {
  try{
    const logBundle = await this.logBundleServices.getLogBundlesByDateRange(startDate,endDate);
    return res.status(HttpStatus.OK).json({
      logBundle: logBundle,
    });
  }
  catch (e) {
    res.status(HttpStatus.FORBIDDEN).json({
      message: 'error',
      log: e,
    })
  }}

  @ApiParam( {name: 'logId'} )
  @Get('/:logId')
  async getBundle(@Res() res, @Param('logId') logId) {
    try{
      const logBundle = await this.logBundleServices.getLogBundle(logId);
      if (!logBundle) throw new NotFoundException('Log bundle does not exist');
      return res.status(HttpStatus.OK).json(logBundle);
    }
    catch (e) {
      res.status(HttpStatus.FORBIDDEN).json({
        message: 'error',
        log: e,
      })
    }}
 

  @ApiParam( {name: 'logId'} )
  @Delete('/delete')
  async deleteLogBundle(@Res() res, @Query('logId') logId) {
    try{
      const logBundleDeleted = await this.logBundleServices.deleteLogBundle(logId);
      if(!logBundleDeleted) throw new NotFoundException('Log bundle does not exist');
      return res.status(HttpStatus.OK).json({
        message: 'recived',
        logBundleDeleted: logBundleDeleted
      });
    }
    catch (e) {
      res.status(HttpStatus.FORBIDDEN).json({
        message: 'error',
        log: e,
      })
    }}

  @ApiParam( {name: 'logId'} )
  @Put('/updateLog')
  async updateLogBundle(@Res() res,@Body()createLogBondleDto: LogBundleDto ,@Query('logId') logId) {
    try{
      const updatelogBundle = await this.logBundleServices.updateLogBundle(logId, createLogBondleDto);
      if(!updatelogBundle) throw new NotFoundException('Log bundle does not exist');
      return res.status(HttpStatus.OK).json({
        message: 'recived',
        updatelogBundle: updatelogBundle
      });
    }
    catch (e) {
      res.status(HttpStatus.FORBIDDEN).json({
        message: 'error',
        log: e,
      })
    }}


}
