import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TableLayout from './TableLayout';
import { ILead } from '../../pages/leads';

const Table = ({ data }: { data: ILead[] }) => {
  return (
    <TableLayout>
      <table className="min-w-full">
        <TableHead />
        <TableBody data={data} />
        <TableFooter />
      </table>
    </TableLayout>
  );
};

export default Table;
