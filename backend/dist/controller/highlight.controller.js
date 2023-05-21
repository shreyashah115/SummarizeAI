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
exports.HighlightController = void 0;
const common_1 = require("@nestjs/common");
const highlight_schema_1 = require("../model/highlight.schema");
const highlight_service_1 = require("../service/highlight.service");
let HighlightController = class HighlightController {
    constructor(highlightService) {
        this.highlightService = highlightService;
    }
    async getAllHighlights() {
        return this.highlightService.getAllHighlights();
    }
    async addNewHighlight(highlightData) {
        return this.highlightService.addNewHighlight(highlightData);
    }
    async deleteHighlight(highlightData) {
        return this.highlightService.removeHighlight(highlightData);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HighlightController.prototype, "getAllHighlights", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [highlight_schema_1.Highlight]),
    __metadata("design:returntype", Promise)
], HighlightController.prototype, "addNewHighlight", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [highlight_schema_1.Highlight]),
    __metadata("design:returntype", Promise)
], HighlightController.prototype, "deleteHighlight", null);
HighlightController = __decorate([
    (0, common_1.Controller)('/api/v1/highlight'),
    __metadata("design:paramtypes", [highlight_service_1.HighlightService])
], HighlightController);
exports.HighlightController = HighlightController;
//# sourceMappingURL=highlight.controller.js.map