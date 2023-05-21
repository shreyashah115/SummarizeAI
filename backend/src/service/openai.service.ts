import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class OpenAIService {
  private openAI: OpenAIApi;
  constructor() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
      organization: 'org-bMVavWesECszZdZqT6UUEmpL',
    });
    this.openAI = new OpenAIApi(configuration);
  }

  async getSummary(prompt) {
    try {
      const completion = await this.openAI.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 800,
        temperature: 1.31,
      });
      return completion?.data.choices?.[0]?.text;
    } catch (error) {
      console.error('Error in getSummary:', error);
      return null;
    }
  }
}
