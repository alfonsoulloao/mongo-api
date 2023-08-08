/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BundleModule } from './bundle/bundle.module';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from './environments/environment';

@Module({
  imports: [
    BundleModule,   
    MongooseModule.forRoot(`mongodb://${environment.mongodb.user}:${environment.mongodb.password}@${environment.mongodb.host}:${environment.mongodb.port}/${environment.mongodb.database}`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
