import { Component, Injectable, Inject } from '@nestjs/common';
import { AuthHelper } from './auth.helper';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class LoginService {
    private authHelper: AuthHelper;
    constructor( @Inject('UserModelToken') private readonly userModel: Model<User> ){}

/*******************************************************
 * Basic Login with credentials
 *******************************************************/
    async login(email) {
      const query = {'email': email};
      const user = await this.userModel.findOne(query);
      if (user){
        process.stdout.write('FOUND');
        return user;
      }
  }
}