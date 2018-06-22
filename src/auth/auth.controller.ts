import { Controller, Get, Post, Request, Response, Body, HttpStatus } from '@nestjs/common';
import { LoginService } from './login.service';
import { SignUpService } from './signup.service';
import { CreateUserDto } from './dto/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')

export class AuthController {

    constructor(
        private loginService: LoginService,
        private authService: AuthService,
        private signupService: SignUpService,
    ) {}

    @Post('/login')
    async login( @Response() res, @Body() email: string, @Body() dto: CreateUserDto ) {
        const auth = await this.loginService.login(dto.email);
        if (auth){
            return res.status(HttpStatus.OK).json(await this.authService.createToken(auth.email));
        }
    }

    @Post('/signup')
    async signup( @Response() res, @Body() dto: CreateUserDto) {
        process.stdout.write('okay');
        const auth = await this.signupService.signup(dto.email);
        res.status(HttpStatus.OK).json(auth);
    }
}