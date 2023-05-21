/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
export type HighlightDocument = Highlight & Document;
export declare class Highlight {
    highlightedText: string;
    webpage: string;
    summary: string;
    createdDate: Date;
}
export declare const HighlightSchema: import("mongoose").Schema<Highlight, import("mongoose").Model<Highlight, any, any, any, import("mongoose").Document<unknown, any, Highlight> & Omit<Highlight & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Highlight, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Highlight>> & Omit<import("mongoose").FlatRecord<Highlight> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
