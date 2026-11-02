const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const root = {
    hello: () => "Hello World from GraphQL!"
};

const app = express();

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    })
);

app.listen(3000, () => {
    console.log("GraphQL server running at http://localhost:3000/graphql");
});