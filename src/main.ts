import { NestFactory } from '@nestjs/core';
import { AppModule } from './Module/app.module';
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
