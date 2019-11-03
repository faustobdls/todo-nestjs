import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Users } from '../users/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) { }

  private async validate(email: string, password: string): Promise<Users> {
    return await this.usersService.findOne(email, password);
  }

  public async login(user: Users): Promise<any | { status: number }> {
    return this.validate(user.email, user.password).then((userData) => {
      if (!userData) {
        return { status: 404 };
      }
      const { password, ...result } = userData;
      let payload = { ...result };
      const accessToken = this.jwtService.sign(payload, {
        expiresIn: 3600,
      });

      return {
        expires_in: 3600,
        access_token: accessToken,
      };

    });
  }

  public async register(user: Users): Promise<any> {
    return this.usersService.create(user);
  }

  public user(jwttoken: string): any {
    return this.usersService.findById(this.jwtService.decode(jwttoken)['id']);
  }

}
