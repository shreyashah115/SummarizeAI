"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const openai_service_1 = require("./openai.service");
describe('OpenAIService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [openai_service_1.OpenAIService],
        }).compile();
        service = module.get(openai_service_1.OpenAIService);
    });
    describe('getSummary', () => {
        it('should call the OpenAIApi with the provided prompt', async () => {
            const prompt = 'Test prompt';
            const completion = {
                data: {
                    choices: [
                        {
                            text: 'Test completion',
                        },
                    ],
                },
            };
            jest
                .spyOn(service['openAI'], 'createCompletion')
                .mockResolvedValue(completion);
            const result = await service.getSummary(prompt);
            expect(service['openAI'].createCompletion).toHaveBeenCalledWith({
                model: 'text-davinci-003',
                prompt: prompt,
                max_tokens: 800,
                temperature: 1.31,
            });
            expect(result).toBe(completion.data.choices[0].text);
        });
        it('should return null if an error occurs', async () => {
            const prompt = 'Test prompt';
            jest
                .spyOn(service['openAI'], 'createCompletion')
                .mockRejectedValue(new Error('Test error'));
            const result = await service.getSummary(prompt);
            expect(result).toBeNull();
        });
    });
});
//# sourceMappingURL=openai.service.test.js.map