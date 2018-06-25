import {
    Module,
    NestModule,
    MiddlewareConsumer,
    RequestMethod,
  } from '@nestjs/common';
import * as passport from 'passport';
import { AuthController } from './auth.controller';
import { LoginService } from './login.service';
import { SignUpService } from './signup.service';
import { AuthHelper } from './auth.helper';
import { DatabaseModule } from 'database/database.module';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { PostsController } from 'posts/posts.controller';
import { PostProviders } from 'posts/posts.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [ AuthController ],
    components: [ AuthHelper  ],
    providers: [
        LoginService, SignUpService, AuthService, JwtStrategy,
        ... PostProviders,
    ],
})

export class AuthModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(passport.authenticate('jwt', { session: false }))
        .forRoutes(PostsController);
    }
  }