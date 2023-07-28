/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose/dist/common';

import { LogBundle } from './interfaces/logBundle.interface';
import { LogBundleDto } from './dto/logBundle.dto';

@Injectable()
export class BundleService {
  constructor(
    @InjectModel('bundle') private readonly bundleModel: Model<LogBundle>,
  ) {}

  async getLogBundles(): Promise<LogBundle[]> {
    const logsBundle = await this.bundleModel.find();
    return logsBundle;
  }

  async getLogBundle(logId: string): Promise<LogBundle> {
    const logBundle = await this.bundleModel.findById(logId);
    return logBundle;
  }

  async createLogBundle(createLogBundleDto: LogBundleDto): Promise<LogBundle> {
    const logbundle = await new this.bundleModel(createLogBundleDto);
    return await logbundle.save();
  }

  async deleteLogBundle(logId: string): Promise<LogBundle> {
    const deletedLogBundle = await this.bundleModel.findByIdAndDelete(logId);
    return deletedLogBundle;
  }

  async updateLogBundle(logId: string, createLogBundleDto: LogBundleDto,): Promise<LogBundle> {
    const updateLogBundle = await this.bundleModel.findByIdAndUpdate(
      logId,
      createLogBundleDto,
      { new: true },
    );
    return updateLogBundle;
  }

}
