import { Model } from 'mongoose';
import { Highlight } from '../model/highlight.schema';
export declare class HighlightService {
    private readonly HighlightModel;
    constructor(HighlightModel: Model<Highlight>);
    getAllHighlights(): Promise<Highlight[]>;
    addNewHighlight(highlightData: Highlight): Promise<Highlight>;
    removeHighlight(highlightData: Highlight): Promise<Highlight>;
}
