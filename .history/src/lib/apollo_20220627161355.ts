import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4x3gkvq047r01ug5t3h0diu/master',
    cache: new InMemoryCache()
}) 