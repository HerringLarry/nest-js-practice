import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface User extends Document {
    readonly email: string;
    readonly password: string;
}