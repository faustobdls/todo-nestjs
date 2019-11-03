import { Controller, Post, Body, UseGuards, Get, Request, Param } from '@nestjs/common';
import { Users } from '../users/users.entity';
import { AuthService } from './auth.service';
import { AuthInput } from './auth.input';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    constructor(private  readonly  authService:  AuthService) {}

    @Post('login')
    async login(@Body() user: AuthInput): Promise<any> {
      return this.authService.login(user);
    } 

    @Post('register')
    async register(@Body() user: Users): Promise<any> {
      return this.authService.register(user);
    }  

    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    async me(@Request() request: Request): Promise<any> {
      const authorization = (<string>request.headers['authorization']);
      const token = authorization.split(' ')[1]
        return this.authService.user(token);
    } 

}
