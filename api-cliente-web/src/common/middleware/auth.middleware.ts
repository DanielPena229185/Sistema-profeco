import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            throw new UnauthorizedException('No token provided');
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            throw new UnauthorizedException('Invalid token');
        }


        try {
            console.log('decoded', decoded);
            // GET https://dev-yy45fagy81uwtb43.us.auth0.com/userinfo Authorization: 'Bearer {ACCESS_TOKEN}'

            // request with axios
             axios.get('https://dev-yy45fagy81uwtb43.us.auth0.com/userinfo', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });




            next();
        } catch (err) {
            throw new UnauthorizedException('Token verification failed');
        }
    }
}

