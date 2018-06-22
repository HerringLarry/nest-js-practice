import { Controller, Get, Post, Request, Response, Body, HttpStatus } from '@nestjs/common';
import { LoginService } from './login.service';
import { SignUpService } from './signup.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('auth')

export class AuthController {

    constructor(
        private loginService: LoginService,
        private signupService: SignUpService,
    ) {}

    @Post('/login')
    async login( @Response() res, @Body() email: string, @Body() dto: CreateUserDto ) {
        const auth = await this.loginService.login(dto.email);
        res.status(HttpStatus.OK).json(auth);
    }

    @Post('/signup')
    async signup( @Response() res, @Body() dto: CreateUserDto) {
        process.stdout.write('okay');
        const auth = await this.signupService.signup(dto.email);
        res.status(HttpStatus.OK).json(auth);
    }
}