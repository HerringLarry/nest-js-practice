import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

interface NoteSchema {
    readonly page: number;
    readonly content: string;
}

export interface Post extends Document {
    readonly user: string;
    readonly notes: NoteSchema [];
}