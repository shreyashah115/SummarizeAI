import { OpenAIService } from 'src/service/openai.service';
export declare class OpenAIController {
    private readonly openAIService;
    constructor(openAIService: OpenAIService);
    getSummary(data: {
        message: string;
    }): Promise<string>;
}
