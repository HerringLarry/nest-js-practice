import { Component, Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { Post } from 'posts/interfaces/post.interface';

@Injectable()
export class SignUpService {

    constructor(@Inject('PostModelToken') private readonly postModel: Model<Post>){}

/*******************************************************
 * SignUp user account
 *******************************************************/
    async signup(email) {
        const query1 = {'user': email};
        const create = {'user': email, 'notes': [{page: 1, content: ''}, {page: 2, content: ''}, {page: 3, content: ''}, {page: 4, content: ''}, {page: 5, content: ''}]};
        const options = {upsert: true}; // If it doesn't exist then create it
        const result = await this.postModel.findOneAndUpdate(query1, create, options);
        return result;
    }

}