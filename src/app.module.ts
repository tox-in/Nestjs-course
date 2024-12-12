import { Module } from '@nestjs/common';
import { AppController } from './Controller/app.controller';
import { CorgiController } from './Controller/corgi.controller';
import { AppService } from './Services/app.service';
import { CorgiService } from './Services/corgi.service';

@Module({
  imports: [],
  controllers: [CorgiController],
  providers: [AppService, CorgiService],
})
export class AppModule {}
