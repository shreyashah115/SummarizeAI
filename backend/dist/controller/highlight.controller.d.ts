import { Highlight } from '../model/highlight.schema';
import { HighlightService } from '../service/highlight.service';
export declare class HighlightController {
    private readonly highlightService;
    constructor(highlightService: HighlightService);
    getAllHighlights(): Promise<Highlight[]>;
    addNewHighlight(highlightData: Highlight): Promise<Highlight>;
    deleteHighlight(highlightData: Highlight): Promise<Highlight>;
}
