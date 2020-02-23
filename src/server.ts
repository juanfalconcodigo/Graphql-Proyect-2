import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import expressPlayground from 'graphql-playground-middleware-express';
import { createServer } from 'http';
import cors from 'cors';
import compression from 'compression';
import schema from './schema';

const PORT=process.env.PORT || 4000;

const app=express();
app.use(cors({origin:true,credentials:true}));
app.use(compression());

const server=new ApolloServer({
    schema,
    introspection:true
});

server.applyMiddleware({app});


app.get('/',expressPlayground({
    endpoint:'/graphql'
}));

const httpServer=createServer(app);

httpServer.listen(PORT,()=>{
    console.log(`Servidor levantado en http://localhost:${PORT}${server.graphqlPath}`);
});