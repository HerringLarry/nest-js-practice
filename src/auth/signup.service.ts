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
        const query1 = {'email': email};
        const options = {upsert: true}; // If it doesn't exist then create it
        const result = await this.postModel.findOneAndUpdate(query1, query1, options);
        process.stdout.write(email + ' ' + result);
        return result;
    }

}