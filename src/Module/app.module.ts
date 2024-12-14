import { Module } from '@nestjs/common';
import { AppController } from '../Controller/app.controller';
import { AppService } from '../Services/app.service';
import { TodoModule } from './todo.module';

@Module({
  imports: [TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
