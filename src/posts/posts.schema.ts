import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
    page: {
        type: Number,
        required: true,
    },
    content: {
        type: String,
        required: false,
    },
});