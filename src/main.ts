/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { environment } from './environments/environment';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages: false,
    whitelist: true,    
  }));

  app.enableVersioning({
    defaultVersion:'1',
    type: VersioningType.URI
  });

  const options = new DocumentBuilder()
  .setTitle('NestJS Bundle')
  .setDescription('trabajo con log para minsal')
  .setVersion('1.0')
  .addTag("Logs")
  .build();

  const document =  SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api/swagger', app, document,{
    explorer:true,
    swaggerOptions:{
      filter:true,
      showRequestDuration: true
    },
  })

  await app.listen(environment.port);
}
bootstrap();
