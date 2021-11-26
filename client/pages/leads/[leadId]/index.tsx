import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { ILead } from '..';
import LeadForm from '../../../components/LeadForm';
import Card from '../../../components/Card';
import { UPDATE_LEAD, DELETE_LEAD } from '../../../graphql/mutations/lead';
import { GET_LEAD_WITH_CALLS } from '../../../graphql/queries/lead';
import { useQuery, useMutation } from '@apollo/client';
import { ICall } from '../../../components/Card';

const LeadView = () => {
  const router = useRouter();
  const id: number = parseInt(router.query.leadId as string);
  const { data, error, loading, refetch } = useQuery(GET_LEAD_WITH_CALLS, {
    variables: { leadId: id },
  });
  const [updateLead] = useMutation(UPDATE_LEAD);
  const [deleteLeadQ] = useMutation(DELETE_LEAD);

  const handleSubmit = (formValues: ILead) => {
    updateLead({ variables: { id: id, ...formValues } });
  };

  const deleteLead = () => {
    deleteLeadQ({ variables: { id: id } });
    refetch();
  };

  const renderLeadDetail = () => {
    return data ? (
      <LeadForm
        title="Lead Information"
        onSubmit={handleSubmit}
        defaultValues={!loading && !error && data?.getLead}
        handleDelete={deleteLead}
      />
    ) : (
      <h2 className="ui header">No Leads Found</h2>
    );
  };

  const renderCard = (): JSX.Element =>
    data &&
    data.getCallsByLeadId.map((call: ICall) => (
      <React.Fragment key={call.id}>
        <Card
          created_at={call.created_at}
          callType={call.callType}
          callStatus={call.callStatus}
        />
      </React.Fragment>
    ));

  return (
    <div className="ui grid">
      <div className="row">
        <div className="column">{renderLeadDetail()}</div>
      </div>
      <div className="row">
        <div className="column">
          <div className="ui cards">{renderCard()}</div>
        </div>
      </div>
    </div>
  );
};

export default LeadView;
