import React from 'react';

const TableLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex flex-col h-1/2 w-100">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden sm:rounded-lg shadow-md">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableLayout;
