import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';
import { getLead } from '../../controller/leadController';
import LeadType from './lead';

const CallType = new GraphQLObjectType({
  name: 'LeadCall',
  fields: () => ({
    user: { type: GraphQLID },
    created_at: { type: GraphQLString },
    callType: { type: GraphQLString },
    callStatus: { type: GraphQLString },
    lead: {
      type: LeadType,
      resolve(parent) {
        return getLead(parent.user);
      },
    },
  }),
});
export default CallType;
