const express = require('express');
const graphqlHttp = require('express-graphql');

const { queryType } = require('./query.js');
const { movieType, directorType } = require('./types');
const { mutationType } = require('./mutation.js');

const port = 5000;
const app = express();

const { GraphQLSchema } = require('graphql');
const schema = new GraphQLSchema({
    query: queryType,
    movie: movieType,
    director: directorType,
    mutation: mutationType
});




app.use('/hello', graphqlHttp({
    schema: schema,
    graphiql: true,
}));

app.listen(port);
console.log(`GraphQL Server Running at localhost:${port}`);
