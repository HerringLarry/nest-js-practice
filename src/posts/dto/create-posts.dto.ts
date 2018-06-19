import * as mongoose from 'mongoose';

export class CreatePostDto {
    readonly page: number;
    readonly content: string;
}