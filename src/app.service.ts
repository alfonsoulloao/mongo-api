import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Para la Documentacion se debe agregar : /api/swagger';
  }
}
