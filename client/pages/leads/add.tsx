import React from 'react';
import LeadForm from '../../components/LeadForm';
import { ILead } from '.';
import { useMutation } from '@apollo/client';
import { ADD_LEAD } from '../../graphql/mutations/lead';

const AddLead = () => {
  const [addLead] = useMutation(ADD_LEAD);
  const onSubmit = (formValues: ILead) => {
    addLead({ variables: { ...formValues } });
  };

  return (
    <div>
      <LeadForm title="Add Lead" onSubmit={onSubmit} />
    </div>
  );
};

export default AddLead;
