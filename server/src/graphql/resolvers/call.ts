import {
  addCallByLeadId,
  deleteCallById,
  getCalls,
  getCall,
  updateCallById,
  getCallsByLeadId,
} from '../../controller/callController';
import { Call } from '../../entities/Call';

const callResolvers = {
  Query: {
    getCalls() {
      return getCalls();
    },
    getCall(_: void, args: { id: number }) {
      return getCall(args.id);
    },
    getCallsByLeadId(_: void, args: { user: number }) {
      return getCallsByLeadId(args.user);
    },
  },
  Mutation: {
    addCall(_: void, args: Call) {
      addCallByLeadId(args);
      return args;
    },
    updateCall(_: void, args: Call) {
      updateCallById(args);
      return args;
    },
    deleteCall(_: void, args: { id: number }) {
      deleteCallById(args.id);
      return args;
    },
  },
};

export default callResolvers;
