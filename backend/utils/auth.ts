require('dotenv').config();

const jwt = require('jsonwebtoken');

import { Request, Response } from 'express';

const expiration: string  = '2h';

interface PayloadInterface
{
    username: string;
    id: number;
}

function checkToken (req: any)
{
    let token: any= req.headers.authorization;

    if (req.headers.authorization) {
        token = token.split(' ').pop().trim();
    }

    if (!token) {
        return req;
    }

    try {
        const { data } = jwt.verify(token, process.env.SECRET, { maxAge: expiration });
        req.user = data;
      }
      catch {
        console.log('Invalid token');
      }
  
      return req;
}

function getToken ({ username, id }: PayloadInterface) {
    const payload: PayloadInterface = { username, id};

    return jwt.sign({ data: payload }, process.env.SECRET, { expiresIn: expiration });
}

module.exports = {
    checkToken,
    getToken
}