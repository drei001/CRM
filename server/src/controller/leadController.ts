import { Lead } from '../entities/Lead';
import { omit } from 'lodash';
import { Like } from 'typeorm';

const getLeads = async (searchInput: string) => {
  try {
    const leads = await Lead.find({
      order: { created_at: 'ASC' },
      where: [
        { firstName: Like(`%${searchInput}%`) },
        { lastName: Like(`%${searchInput}%`) },
      ],
    });
    return leads;
  } catch (err) {
    console.log(err);
  }
};

const getLead = async (leadId: number) => {
  try {
    return await Lead.findOne(leadId);
  } catch (err) {
    console.log(err);
  }
};

const addLead = async (lead: Lead): Promise<void> => {
  try {
    const newLead = Lead.create(lead);
    await newLead.save();
  } catch (err) {
    console.log(err);
  }
};

const updateLead = async (lead: Lead) => {
  try {
    await Lead.update({ id: lead.id }, omit(lead, 'id'));
  } catch (err) {
    console.log(err);
  }
};

const deleteLead = async (leadId: number) => {
  try {
    await Lead.delete(leadId);
  } catch (err) {
    console.log(err);
  }
};

export { getLeads, addLead, updateLead, deleteLead, getLead };
