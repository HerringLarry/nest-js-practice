import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Post } from './interfaces/post.interface';
import { CreatePostDto } from './dto/create-posts.dto';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class PostsService {

    constructor(@Inject('PostModelToken') private readonly postModel: Model<Post>) { }

    async createPage( createPostDto: CreatePostDto, user: string ): Promise<Post> {
        process.stdout.write(user + '');
        const query = {'user': user, 'notes': {'$elemMatch': {page: createPostDto.page}}};
        const update = {'$set': {'notes.$.page': createPostDto.page, 'notes.$.content': createPostDto.content}};
        return await this.postModel.update( query, update );
    }

    async findPage( p: number, user: string ): Promise<Post> {
        return await this.postModel.findOne( {'user': user} ).exec();
    }
}