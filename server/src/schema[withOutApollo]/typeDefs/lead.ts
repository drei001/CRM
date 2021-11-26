import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

const LeadType = new GraphQLObjectType({
  name: 'Lead',
  fields: () => ({
    leadId: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    contactNo: { type: GraphQLString },
    address: { type: GraphQLString },
    avatar: { type: GraphQLString },
    source: { type: GraphQLString },
    created: { type: GraphQLString },
  }),
});

export default LeadType;
