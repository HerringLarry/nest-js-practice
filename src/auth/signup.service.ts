import { Component, Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class SignUpService {

    constructor(@Inject('UserModelToken') private readonly userModel: Model<User>){}

/*******************************************************
 * SignUp user account
 *******************************************************/
    async signup(email, password) {
        const query1 = {'email': email, 'password': password};
        const options = {upsert: true}; // If it doesn't exist then create it
        const result = await this.userModel.findOneAndUpdate(query1, query1, options);
        process.stdout.write(email + '' + password + ' ' + result);
        return result;
    }

}