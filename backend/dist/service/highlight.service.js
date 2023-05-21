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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HighlightService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let HighlightService = class HighlightService {
    constructor(HighlightModel) {
        this.HighlightModel = HighlightModel;
    }
    async getAllHighlights() {
        const highlights = await this.HighlightModel.find().lean();
        return highlights.map((highlight) => ({
            id: highlight._id,
            highlightedText: highlight.highlightedText,
            webpage: highlight.webpage,
            createdDate: highlight.createdDate,
            summary: highlight.summary,
        }));
    }
    async addNewHighlight(highlightData) {
        const newHighlight = new this.HighlightModel(highlightData);
        return newHighlight.save();
    }
    async removeHighlight(highlightData) {
        return this.HighlightModel.findOneAndDelete({
            webpage: highlightData.webpage,
            highlightedText: highlightData.highlightedText,
        });
    }
};
HighlightService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Highlight')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], HighlightService);
exports.HighlightService = HighlightService;
//# sourceMappingURL=highlight.service.js.map