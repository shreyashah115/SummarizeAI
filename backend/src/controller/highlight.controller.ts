import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { Highlight } from '../model/highlight.schema';

import { HighlightService } from '../service/highlight.service';

@Controller('/api/v1/highlight')
export class HighlightController {
  constructor(private readonly highlightService: HighlightService) {}

  @Get()
  async getAllHighlights(): Promise<Highlight[]> {
    return this.highlightService.getAllHighlights();
  }

  @Post()
  async addNewHighlight(@Body() highlightData: Highlight): Promise<Highlight> {
    return this.highlightService.addNewHighlight(highlightData);
  }

  @Delete()
  async deleteHighlight(@Body() highlightData: Highlight): Promise<Highlight> {
    return this.highlightService.removeHighlight(highlightData);
  }
}
