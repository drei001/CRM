import React from 'react';

const NewTable = () => {
  return (
    <div className="flex flex-col h-1/2 w-100">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden sm:rounded-lg shadow-md">
            <table className="min-w-full">
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
              <tbody>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Apple MacBook Pro 17
                  </td>
                  <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                    Sliver
                  </td>
                  <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                    Laptop
                  </td>
                  <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                    $2999
                  </td>
                  <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                    $2999
                  </td>
                  <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                    $2999
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-blue-600 hover:text-blue-900">
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
              <tfoot className="flex p-2">
                <tr>
                  <td>
                    <a
                      href="#"
                      className="text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 text-sm font-medium rounded-lg inline-flex items-center px-2 py-2 mr-3"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Previous
                    </a>
                  </td>
                  <td>
                    <a
                      href="#"
                      className="text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 text-sm font-medium rounded-lg inline-flex items-center px-2 py-2"
                    >
                      Next
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTable;
