import leadResolvers from './resolvers/lead';
import callResolvers from './resolvers/call';
import { merge } from 'lodash';

const resolvers = merge({}, leadResolvers, callResolvers);

export default resolvers;
