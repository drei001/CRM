import React from 'react';
import Link from 'next/dist/client/link';
const TableFooter = () => {
  return (
    <tfoot>
      <tr className="flex p-2 justify-evenly">
        <td>
          <a
            href="#"
            className="text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 text-sm font-medium rounded-lg inline-flex items-center px-2 py-2"
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
        <td>
          <Link href="/leads/add" passHref>
            <a
              type="button"
              className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
            >
              Add lead
            </a>
          </Link>
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
