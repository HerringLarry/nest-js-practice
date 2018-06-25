import * as jwt from 'jsonwebtoken';
import { Component } from '@nestjs/common';
import { LoginService } from './login.service';

@Component()
export class AuthService {
  constructor(private _loginServer: LoginService) { }

  async createToken(username: string) {
    const expiresIn = 60 * 60;
    const secretOrKey = 'secret';
    const user = { username };
    const token = jwt.sign(user, secretOrKey, { expiresIn });

    return { expires_in: expiresIn, token };
  }

  async validateUser(signedUser): Promise<boolean> {
    if (signedUser && signedUser.username) {
    // process.stdout.write('ejejejej');
      return Boolean(this._loginServer.login(signedUser.username));
    }

    return false;
  }
}