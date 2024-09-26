import React from "react";

const MyOrdersPage = () => {
  return (
    <div className="md:pr-2">
      <div className="bg-base-3 p-4 rounded-md overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-base-2 text-start">
              <th className="px-4 py-2 text-light text-start">Course</th>
              <th className="px-4 py-2 text-light text-start ">Date & Time</th>
              <th className="px-4 py-2 text-light text-start">Status</th>
              <th className="px-4 py-2 text-light text-start">
                Payment Medium
              </th>
              <th className="px-4 py-2 text-light text-start">Amount</th>
              <th className="px-4 py-2 text-light text-start">Invoice</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-1 hover:bg-base-2 hover:bg-opacity-25 cursor-default duration-300">
              <td className="px-4 py-2">Course 1</td>
              <td className="px-4 py-2">2022-01-01 10:00 AM</td>
              <td className="px-4 py-2">Paid</td>
              <td className="px-4 py-2">Credit Card</td>
              <td className="px-4 py-2">$100.00</td>
              <td className="px-4 py-2">#INV001</td>
            </tr>
            <tr className="border-b border-gray-2 hover:bg-base-3">
              <td className="px-4 py-2">Course 2</td>
              <td className="px-4 py-2">2022-01-05 2:00 PM</td>
              <td className="px-4 py-2">Pending</td>
              <td className="px-4 py-2">Bank Transfer</td>
              <td className="px-4 py-2">$200.00</td>
              <td className="px-4 py-2">#INV002</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
