import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Post } from './interfaces/post.interface';
import { CreatePostDto } from './dto/create-posts.dto';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class PostsService {

    constructor(@Inject('PostModelToken') private readonly postModel: Model<Post>) { }

    async createPage( createPostDto: CreatePostDto ): Promise<Post> {
        const query = {'page': createPostDto.page};
        const update = {'content': createPostDto.content};
        const options = {upsert: true}; // If it doesn't exist then create it
        return await this.postModel.findOneAndUpdate( query, update, options );
    }

    async findPage( p: number ): Promise<Post> {
        return await this.postModel.findOne( {'page': p} ).exec();
    }
}