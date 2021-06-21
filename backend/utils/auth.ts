const jwt = require('jsonwebtoken');

import { Request, Response } from 'express';

// const secret = 'secret';
// const expiration = '2h';

interface authMiddleWareReturnValue
{
    req:!Request;
    req:any;
}

function authMiddleware (req: any): authMiddleWareReturnValue

    let token: any= req.headers.authorization;

    if (req.headers.authorization) {
        token = token.split(' ').pop().trim();
    }

    if (!token) {
        return req;
    }

    try {
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        req.user = data;
      }
      catch {
        console.log('Invalid token');
      }
  
      return req;
}

module.exports = {
    authMiddleware,
}