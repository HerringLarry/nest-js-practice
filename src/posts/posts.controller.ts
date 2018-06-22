import { Controller, Get, Post, Body, Param, HttpStatus, Request, Response, Headers } from '@nestjs/common';
import { CreatePostDto } from './dto/create-posts.dto';
import { PostsService } from './posts.service';
import * as jwt from 'jsonwebtoken';
@Controller( 'posts' )
export class PostsController {

    constructor( private readonly postsService: PostsService) { }

    @Post( '/post/' )
    create( @Body() cto: CreatePostDto,@Headers() headers: any, @Response() res ) {
        this.postsService.createPage( cto ).then( result => {
            return res.status( HttpStatus.CREATED ).json( result );
        }).catch(error => {
            process.stdout.write(error + '');
            return res.status( HttpStatus.NOT_MODIFIED).json(error);
        });
    }

    @Get( '/get/:page' )
    findPage( @Param( 'page' ) page: string, @Headers() headers: any, @Response() res ) {
        const token = headers.authorization.replace('Bearer ', '');
        const decoded = jwt.verify(token, 'secret');
        this.postsService.findPage ( Number( page ) ).then( result => {
            return res.status( HttpStatus.OK ).json( result.content );
        }).catch(error => {
            return res.status( HttpStatus.NOT_FOUND).json(error);
        });
    }
}