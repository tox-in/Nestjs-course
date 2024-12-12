import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CorgiController } from './Controller/corgi.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [CorgiController],
  providers: [AppService],
})
export class AppModule {}
