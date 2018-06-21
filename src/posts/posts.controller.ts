import { Controller, Get, Post, Body, Param, HttpStatus, Request, Response } from '@nestjs/common';
import { CreatePostDto } from './dto/create-posts.dto';
import { PostsService } from './posts.service';
@Controller( 'posts' )
export class PostsController {

    constructor( private readonly postsService: PostsService ) { }

    @Post( '/post/' )
    create( @Body() cto: CreatePostDto, @Response() res ) {
        this.postsService.createPage( cto ).then( result => {
            return res.status( HttpStatus.CREATED ).json( result );
        }).catch(error => {
            process.stdout.write(error + '');
            return res.status( HttpStatus.NOT_MODIFIED)
        });
    }

    @Get( '/get/:page' )
    findPage( @Param( 'page' ) page: string, @Response() res ) {
        this.postsService.findPage ( Number( page ) ).then( result => {
            return res.status( HttpStatus.OK ).json( result.content );
        }).catch(error => {
            process.stdout.write(error + '');
            return res.status( HttpStatus.NOT_FOUND);
        });
    }
}