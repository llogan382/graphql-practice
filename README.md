# graphql-practice

Walking through the docs for a build with react/apollo.

Found on https://www.howtographql.com/react-apollo/0-introduction/


Notes:

## frontend
1) Get the structure of the app setup; this includes files, styles, components, etc.

2) Install Apollo Client in the root directory (hackernews-react-apollo in this instance) with the following command:
    `yarn add apollo-boost react-apollo graphql`
    Apollo boost includes several packages in one:
    -   apollo-client
    -   apollo-cache-memory
    -   apollo-link-http
    -   apollo-link-error
    -   apollo-link-state
    -   graphql-tag
3. Configure   `ApolloClient`
Apollo Client abstracts all lower-level networking logic and provides an interface to the server.
You done have to construct HTTP requests (like you would with REST APIs)
Write QUERIES and MUTATIONS and send them using an  ApolloClient instace.
The ApolloClient just needs to know the ENDPOINT of the API, so it can deal with network connections

4. Download Server Code. Run the following in the terminal in the ROOT dirctory:
`curl https://codeload.github.com/howtographql/react-apollo/tar.gz/starter | tar -xz --strip=1 react-apollo-starter/server`
This will add the following components:
    - `prisma`. This is Prisma Client, and used to access the DB in your GraphQL resolvers.
        - This includes the `prisma.yml` file, the root of the Prisma Project
        -   `datamodel.prisma` is the data model, which describes the DB schema
    - `src` holds the source files for the server
        - `schema.graphql` contains the APP chema. It defines the GraphQL operations sent from the FE
        - `generated/prisma-client` the auto-generated Prisma client
        - `resolvers` contain functions for the operations in the application
    - `index.js` is the entry point for the server
    - Only Schema.graphql is relevant to a frontend Dev
    This defines all the operations (queries, mutations, subscriptions) i can send from the Fronted of the App
5. Deploy the Prisma DB service. Do this before sending queries and myutations.
    - in theterminal, navigate to the `server` directory and enter:
    `cd server
        yarn install
        yarn prisma deploy`
    - Pick the right configuraiton to use
    - Explore the server. Run `yarn start` to start the server.
    This will execute the `start` script found in `package.json` by starting the server and the graphql playground

6. Prepare the React Components.
Create a new component that will display a single Link.
7. Queries. You can now add the queries in the playground, but how can you use it in your code?
### Queries with Apollo Client
With Apollo, there are two ways of sending data to the server.
    1. Use the query method on `ApolloClient` directly. This will return the data as a promise.
