import React, { useState } from 'react';
import Table from '../../components/Table';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { GET_LEADS } from '../../graphql/queries/lead';
import SearchLeadInput from '../../components/SearchLeadInput';

export interface ILead {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  contactNo: string;
  address: string;
  avatar?: string;
  source?: string;
  created_at: string;
}

const LeadsPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const { data } = useQuery(GET_LEADS, {
    variables: { searchInput },
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="flex-col">
      {/* <SearchLeadInput
        searchInput={searchInput}
        handleOnChange={handleOnChange}
      /> */}
      <div>
        <Table data={data && data.getAllLeads.slice(0, 10)} />
      </div>
    </div>
  );
};

export default LeadsPage;
