const db = require('../db/knex')
const bcrypt = require('bcrypt')
const { AuthenticationError } = require('apollo-server-express');
const { getToken } = require('../utils/auth');

interface CreateUserParameterInterface
{
    username: string;
    password: string;
    email: string;
    firstname: string;
    lastname: string;
}

const resolvers = {
    Query: {
        getPersonalInfo: async (parent, args, context) => {
            
        } 
    },

    Mutation: {
        CreateUser: async (parent, {username, password, email, firstname, lastname}: CreateUserParameterInterface) => {
            const hashedPassword = await bcrypt.hash(password, 10) 
            await db('user')
            .insert({
                username,
                hashedPassword,
                email,
                firstname,
                lastname
            })
        }
    }
}