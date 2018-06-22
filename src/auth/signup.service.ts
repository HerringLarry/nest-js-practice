import { Component, Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class SignUpService {

    constructor(@Inject('UserModelToken') private readonly userModel: Model<User>){}

/*******************************************************
 * SignUp user account
 *******************************************************/
    async signup(email) {
        const query1 = {'email': email};
        const options = {upsert: true}; // If it doesn't exist then create it
        const result = await this.userModel.findOneAndUpdate(query1, query1, options);
        process.stdout.write(email + ' ' + result);
        return result;
    }

}