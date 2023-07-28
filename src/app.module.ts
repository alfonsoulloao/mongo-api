/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BundleModule } from './bundle/bundle.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BundleModule,
    //MongooseModule.forRoot('mongodb://localhost:27020/logBundle'),
    MongooseModule.forRoot('mongodb://indra:jahgai4veith3ie2@172.20.6.73:27017/hcc'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
