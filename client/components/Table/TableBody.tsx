import React from 'react';
import { ILead } from '../../pages/leads';
import Button from '../common/Button';
const TableBody = ({ data }: { data: ILead[] }) => {
  const renderDate = (created: string) => {
    return new Date(parseInt(created)).toLocaleDateString();
  };

  const renderDataTable = () =>
    data &&
    data.map((lead) => (
      <tr className="bg-white border-b" key={lead.id}>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {renderDate(lead.created_at)}
        </td>
        <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
          {lead.firstName}
        </td>
        <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
          {lead.lastName}
        </td>
        <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
          {lead.email}
        </td>
        <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
          {lead.contactNo}
        </td>
        <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
          {lead.address}
        </td>
        <td className="whitespace-nowrap text-center text-sm font-medium">
          <a href="#" className="text-blue-600 hover:text-blue-900 p-2">
            Edit
          </a>
          <Button
            text="Delete"
            color="bg-red-500"
            size="text-xs"
            hover="bg-red-600"
            focus="focus:ring-red-300"
          />
        </td>
      </tr>
    ));

  return <tbody>{renderDataTable()}</tbody>;
};

export default TableBody;
