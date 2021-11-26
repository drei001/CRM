import {
  addLead,
  deleteLead,
  getLead,
  getLeads,
  updateLead,
} from '../../controller/leadController';
import { Lead } from '../../entities/Lead';

const leadResolvers = {
  Query: {
    getAllLeads(_: void, args: { searchInput: string }) {
      return getLeads(args.searchInput);
    },
    getLead(_: void, args: { id: number }) {
      return getLead(args.id);
    },
  },

  Mutation: {
    createLead(_: void, args: Lead) {
      addLead(args);
      return args;
    },
    updateLead(_: void, args: Lead) {
      updateLead(args);
      return args;
    },
    deleteLead(_: void, args: { id: number }) {
      return deleteLead(args.id);
    },
  },
};

export default leadResolvers;
