import { Module } from '@nestjs/common';
import { BundleController } from './bundle.controller';
import { BundleService } from './bundle.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LogBundleSchema } from './schema/logBundle.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'bundle', schema: LogBundleSchema }]),
  ],
  controllers: [BundleController],
  providers: [BundleService],
})
export class BundleModule {}
