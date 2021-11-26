import React from 'react';

const TableHead = () => {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th
          scope="col"
          className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider"
        >
          Created At
        </th>
        <th
          scope="col"
          className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider"
        >
          First Name
        </th>
        <th
          scope="col"
          className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider"
        >
          Last Name
        </th>
        <th
          scope="col"
          className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider"
        >
          Email
        </th>
        <th
          scope="col"
          className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider"
        >
          Contact Number
        </th>
        <th
          scope="col"
          className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider"
        >
          Address
        </th>
        <th
          scope="col"
          className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider"
        >
          Action
        </th>
        <th scope="col" className="relative px-6 py-3">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
