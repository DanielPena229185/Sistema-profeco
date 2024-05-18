import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
      const authHeader = req.headers.authorization;
      const email = req.headers.email;

      if (!authHeader) {
          throw new UnauthorizedException('No token provided');
      }

      let token = authHeader.split(' ')[1];

      const tokenRes = await axios({
          method: 'POST',
          url: 'https://dev-yy45fagy81uwtb43.us.auth0.com/oauth/token',
          headers: { 'content-type': 'application/json' },
          data: {
              client_id: '3VAfTEZxd0UlnxGeTD8T9uAdIW4aHxDJ',
              client_secret:
                  'mEC-V1v93NNK5KM41-yKvrPFvn3OScmr-stJQJjUkgQYknasIdVlF4-fUyKmSFq2',
              audience: 'https://dev-yy45fagy81uwtb43.us.auth0.com/api/v2/',
              grant_type: 'client_credentials',
          },
      })
      console.log(tokenRes.data.access_token);

      token = tokenRes.data.access_token;
      if (!token) {
          throw new UnauthorizedException('Invalid token');
      }
      try {
          const options = {
              method: 'GET',
              url: 'https://dev-yy45fagy81uwtb43.us.auth0.com/api/v2/users',
              params: { q: `email:"${email}"`, search_engine: 'v3' },
              headers: {
                  'content-type': 'application/json',
                  authorization: `Bearer ${token}`,
              },
          };
          const response = await axios(options);

          if (response.status === 200) {
              req.user = {
                  id: response.data[0].user_id,
                  email: response.data[0].email,
                  curp: response.data[0].user_metadata?.CURP,
                  nombres: response.data[0].user_metadata?.nombres,
                  apellidos: response.data[0].user_metadata?.apellidos,
              };
              next();
          } else {
              throw new UnauthorizedException('Token verification failed');
          }
      } catch (err) {
          console.error(err);
          throw new UnauthorizedException('Token verification failed');
      }
  }
}