import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostProviders } from './posts.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [PostsController],
    providers: [
        PostsService,
        ... PostProviders,
    ],
})
export class PostsModule { }