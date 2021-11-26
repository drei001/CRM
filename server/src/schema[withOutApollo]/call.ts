import { GraphQLList, GraphQLID, GraphQLString } from 'graphql';
import CallType from './typeDefs/call';
import {
  getCalls,
  getCallsByLeadId,
  addCallByLeadId,
  deleteCallById,
  updateCallById,
} from '../controller/callController';

const CallQueryObject = {
  getCalls: {
    type: new GraphQLList(CallType),
    resolve: () => {
      return getCalls();
    },
  },
  getCallsByLeadId: {
    type: new GraphQLList(CallType),
    args: {
      user: { type: GraphQLID },
    },
    resolve: (_: any, args: any) => {
      return getCallsByLeadId(args.user);
    },
  },
};

const CallMutationObject = {
  addCallByLeadId: {
    type: CallType,
    args: {
      user: { type: GraphQLID },
      callType: { type: GraphQLString },
      callStatus: { type: GraphQLString },
    },
    resolve: (_: any, args: any) => {
      addCallByLeadId(args);
      return args;
    },
  },
  updateCallById: {
    type: CallType,
    args: {
      id: { type: GraphQLID },
      callType: { type: GraphQLString },
      callStatus: { type: GraphQLString },
    },
    resolve: (_: any, args: any) => {
      updateCallById(args);
      return args;
    },
  },
  deleteCallById: {
    type: CallType,
    args: {
      id: { type: GraphQLID },
    },
    resolve: (_: any, args: any) => {
      deleteCallById(args.id);
    },
  },
};

export { CallQueryObject, CallMutationObject };
