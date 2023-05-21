import { Body, Controller, Post } from '@nestjs/common';
import { OpenAIService } from 'src/service/openai.service';

@Controller('/api/v1/openai')
export class OpenAIController {
  constructor(private readonly openAIService: OpenAIService) {}

  @Post()
  async getSummary(@Body() data: { message: string }) {
    return this.openAIService.getSummary(data.message);
  }
}
