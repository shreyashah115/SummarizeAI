import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type HighlightDocument = Highlight & Document;
@Schema()
export class Highlight {
  @Prop({ required: true })
  highlightedText: string;
  @Prop({ required: true, lowercase: true })
  webpage: string;
  @Prop({ text: true })
  summary: string;
  @Prop({ default: Date.now() })
  createdDate: Date;
}
export const HighlightSchema = SchemaFactory.createForClass(Highlight);
