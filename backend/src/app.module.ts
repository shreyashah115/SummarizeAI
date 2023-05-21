import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HighlightSchema } from './model/highlight.schema';
import { HighlightController } from './controller/highlight.controller';
import { HighlightService } from './service/highlight.service';
import { OpenAIController } from './controller/openai.controller';
import { OpenAIService } from './service/openai.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Stream'),
    MongooseModule.forFeature([{ name: 'Highlight', schema: HighlightSchema }]),
  ],
  controllers: [HighlightController, OpenAIController],
  providers: [HighlightService, OpenAIService],
})
export class HighlightModule {}
