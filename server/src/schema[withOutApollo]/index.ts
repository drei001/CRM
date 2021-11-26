import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { LeadQueryObject, LeadMutationObject } from './lead';
import { CallQueryObject, CallMutationObject } from './call';
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...LeadQueryObject,
    ...CallQueryObject,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...LeadMutationObject,
    ...CallMutationObject,
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

export default schema;
