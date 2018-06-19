import { Controller, Get, Post, Body, Param, HttpStatus, Request, Response } from '@nestjs/common';
import { CreatePostDto } from './dto/create-posts.dto';
import { PostsService } from './posts.service';
// import { Post as PostInterface } from './interfaces/post.interface';

@Controller( 'posts' )
export class PostsController {

    constructor( private readonly postsService: PostsService ) { }

    @Post( '/post/' )
    async create(@Body() cto: CreatePostDto, @Response() res ) {
        const note = this.postsService.createPage( cto );
        return await res.status( HttpStatus.CREATED ).send(note);
    }

    @Get( '/get/:page' )
    async findPage( @Param( 'page' ) page: string, @Response() res ): Promise<CreatePostDto> {
        const note =  await this.postsService.findPage ( Number( page ) );
        return res.status( HttpStatus.OK ).json( note );
    }
}