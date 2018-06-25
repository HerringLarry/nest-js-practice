import * as mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    page: {
        type: Number,
        default: -1,
    },
    content: {
        type: String,
        default: '',
    },
});

export const PostSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    notes: [{
        type: noteSchema,
        required: true,
    }],
});