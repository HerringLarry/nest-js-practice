import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface Post extends Document {
    readonly page: number;
    readonly content: string;
}