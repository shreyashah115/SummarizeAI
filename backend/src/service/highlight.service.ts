import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Highlight } from '../model/highlight.schema';

@Injectable()
export class HighlightService {
  constructor(
    @InjectModel('Highlight') private readonly HighlightModel: Model<Highlight>,
  ) {}

  async getAllHighlights(): Promise<Highlight[]> {
    const highlights = await this.HighlightModel.find().lean();
    return highlights.map((highlight) => ({
      id: highlight._id,
      highlightedText: highlight.highlightedText,
      webpage: highlight.webpage,
      createdDate: highlight.createdDate,
      summary: highlight.summary,
    }));
  }

  async addNewHighlight(highlightData: Highlight): Promise<Highlight> {
    const newHighlight = new this.HighlightModel(highlightData);
    return newHighlight.save();
  }

  async removeHighlight(highlightData: Highlight): Promise<Highlight> {
    return this.HighlightModel.findOneAndDelete({
      webpage: highlightData.webpage,
      highlightedText: highlightData.highlightedText,
    });
  }
}
