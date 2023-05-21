import { NestFactory } from '@nestjs/core';
import { HighlightModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(HighlightModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
