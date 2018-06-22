import { Component, Injectable, Inject } from '@nestjs/common';
import { AuthHelper } from './auth.helper';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { AuthService } from './auth.service';
import { Post } from 'posts/interfaces/post.interface';

@Injectable()
export class LoginService {
    private _authServer: AuthService;
    constructor( @Inject('PostModelToken') private readonly postModel: Model<Post> ){}

/*******************************************************
 * Basic Login with credentials
 *******************************************************/
    async login(email) {
      const query = {'email': email};
      const user = await this.postModel.findOne(query);
      if (user){
        process.stdout.write('FOUND');
        return user;
      }
  }
}