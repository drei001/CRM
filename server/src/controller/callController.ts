import { Call } from '../entities/Call';
import { omit } from 'lodash';

const getCalls = async () => {
  try {
    return await Call.find({ relations: ['user'] });
  } catch (err) {
    console.log(err);
  }
};
const getCall = async (id: number) => {
  try {
    return await Call.findOne(id);
  } catch (err) {
    console.log(err);
  }
};

const getCallsByLeadId = async (user: number) => {
  try {
    return await Call.find({ where: { user } });
  } catch (err) {
    console.log(err);
  }
};

const addCallByLeadId = async (call: Call) => {
  try {
    const newCall = Call.create({
      user: call.user,
      callType: call.callType,
      callStatus: call.callStatus,
    });
    await newCall.save();
  } catch (err) {
    console.log(err);
  }
};

const updateCallById = async (call: Call) => {
  try {
    return await Call.update({ id: call.id }, omit(call, 'id'));
  } catch (err) {
    console.log(err);
  }
};
const deleteCallById = async (id: number) => {
  try {
    await Call.delete({ id: id });
  } catch (err) {
    console.log(err);
  }
};

export {
  getCalls,
  getCall,
  getCallsByLeadId,
  updateCallById,
  deleteCallById,
  addCallByLeadId,
};
