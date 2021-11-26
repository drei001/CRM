import { GraphQLList, GraphQLID, GraphQLString } from 'graphql';
import LeadType from './typeDefs/lead';
import {
  getLead,
  getLeads,
  updateLead,
  deleteLead,
  addLead,
} from '../controller/leadController';

const LeadQueryObject = {
  getAllLeads: {
    type: new GraphQLList(LeadType),
    resolve: () => {
      return getLeads();
    },
  },
  getLead: {
    type: LeadType,
    args: {
      id: { type: GraphQLID },
    },
    resolve: (_: any, args: any) => {
      return getLead(args.id);
    },
  },
};

const LeadMutationObject = {
  createLead: {
    type: LeadType,
    args: {
      firstName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      email: { type: GraphQLString },
      contactNo: { type: GraphQLString },
      address: { type: GraphQLString },
    },
    resolve(_: any, args: any) {
      addLead(args);
      return args;
    },
  },
  updateLead: {
    type: LeadType,
    args: {
      id: { type: GraphQLID },
      firstName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      email: { type: GraphQLString },
      contactNo: { type: GraphQLString },
      address: { type: GraphQLString },
    },
    resolve(_: any, args: any) {
      updateLead(args);
      return args;
    },
  },
  deleteLead: {
    type: LeadType,
    args: {
      id: { type: GraphQLID },
    },
    resolve(_: any, args: any) {
      deleteLead(args.id);
      return args;
    },
  },
};

export { LeadQueryObject, LeadMutationObject };
