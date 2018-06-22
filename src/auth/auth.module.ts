import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LoginService } from './login.service';
import { SignUpService } from './signup.service';
import { AuthHelper } from './auth.helper';
import { AuthProviders } from './auth.providers';
import { DatabaseModule } from 'database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [ AuthController ],
    components: [ AuthHelper ],
    providers: [
        LoginService, SignUpService,
        ... AuthProviders,
    ],
})

export class AuthModule {}