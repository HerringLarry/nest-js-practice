import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Post } from './interfaces/post.interface';
import { CreatePostDto } from './dto/create-posts.dto';

@Injectable()
export class PostsService {

    constructor(@Inject('PostModelToken') private readonly postModel: Model<Post>) { }

    async createPage( createPostDto: CreatePostDto ): Promise<Post> {
        const createdPost = new this.postModel(createPostDto);
        // process.stdout.write(String(createPostDto.))
        return await createdPost.save((err) => {
            process.stdout.write(String(err) + '\n');
        });
    }

    async findPage( p: number ): Promise<Post> {
        return await this.postModel.findOne({page: p}).exec();
    }
}