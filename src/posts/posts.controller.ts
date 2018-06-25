import { Controller, Get, Post, Body, Param, HttpStatus, Request, Response, Headers } from '@nestjs/common';
import { CreatePostDto } from './dto/create-posts.dto';
import { PostsService } from './posts.service';
import * as jwt from 'jsonwebtoken';

interface Token{
    readonly exp: number;
    readonly iat: number;
    readonly username: string;
}
@Controller( 'posts' )
export class PostsController {

    constructor( private readonly postsService: PostsService) { }

    @Post( '/post/' )
    create( @Body() cto: CreatePostDto, @Headers() headers: any, @Response() res ) {
        const token = headers.authorization.replace('Bearer ', '');
        const first = JSON.stringify( jwt.verify(token, 'secret') );
        const decoded = JSON.parse(first);
        this.postsService.createPage( cto, decoded.username ).then( result => {
            return res.status( HttpStatus.CREATED ).json( decoded );
        }).catch(error => {
            process.stdout.write(error + '');
            return res.status( HttpStatus.NOT_MODIFIED).json(error);
        });
    }

    @Get( '/get/:page' )
    findPage( @Param( 'page' ) page: string, @Headers() headers: any, @Response() res ) {
        process.stdout.write('hello \n');
        const token = headers.authorization.replace('Bearer ', '');
        const first = JSON.stringify( jwt.verify(token, 'secret') );
        const decoded = JSON.parse(first);
        const p = Number( page );
        this.postsService.findPage ( p, decoded.username ).then( result => {
            return res.status( HttpStatus.OK ).json( result.notes[p - 1] );
        }).catch(error => {
            return res.status( HttpStatus.NOT_FOUND).json(error);
        });
    }
}