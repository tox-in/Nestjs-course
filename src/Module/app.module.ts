import { Module } from '@nestjs/common';
import { AppController } from '../Controller/app.controller';
import { CorgiController } from '../Controller/corgi.controller';
import { AppService } from '../Services/app.service';
import { CorgiService } from '../Services/corgi.service';
import { CorgiModule } from './corgi.module';
import { Corgi } from 'src/Providers/corgi.provider';
import { Husky } from 'src/Providers/husky.provider';

@Module({
  imports: [CorgiModule],
  controllers: [CorgiController],
  providers: [AppService, CorgiService, Corgi, Husky],
})
export class AppModule {}
