"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIService = void 0;
const common_1 = require("@nestjs/common");
const openai_1 = require("openai");
let OpenAIService = class OpenAIService {
    constructor() {
        const configuration = new openai_1.Configuration({
            apiKey: process.env.OPENAI_API_KEY,
            organization: process.env.OPENAI_ORG_KEY,
        });
        this.openAI = new openai_1.OpenAIApi(configuration);
    }
    async getSummary(prompt) {
        var _a, _b;
        try {
            const completion = await this.openAI.createCompletion({
                model: 'text-davinci-003',
                prompt: prompt,
                max_tokens: 800,
                temperature: 1.31,
            });
            return (_b = (_a = completion === null || completion === void 0 ? void 0 : completion.data.choices) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.text;
        }
        catch (error) {
            console.error('Error in getSummary:', error);
            return null;
        }
    }
};
OpenAIService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], OpenAIService);
exports.OpenAIService = OpenAIService;
//# sourceMappingURL=openai.service.js.map