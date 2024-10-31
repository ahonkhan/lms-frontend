import React, { useContext } from "react";
import courseApiSlice from "../../../redux/api/courseApiSlice";
import { LoaderPage } from "../../../components/loader/Loader";
import { GetAuthContext } from "../../../contexts/AuthContext";

const MyOrdersPage = () => {
  const authContext = useContext(GetAuthContext);
  const { data, isLoading } = courseApiSlice.useGetMyCoursesQuery();

  return (
    <div className="md:pr-2">
      <div className="bg-base-3 p-4 rounded-md overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-base-2 text-start">
              <th className="px-4 py-2 text-light text-start">Transaction</th>
              <th className="px-4 py-2 text-light text-start">Course</th>
              <th className="px-4 py-2 text-light text-start ">Date & Time</th>
              <th className="px-4 py-2 text-light text-start">Status</th>
              <th className="px-4 py-2 text-light text-start">
                Payment Medium
              </th>
              <th className="px-4 py-2 text-light text-start">Amount</th>
              {authContext.user.role !== "customer" && (
                <th className="px-4 py-2 text-light text-start">User</th>
              )}
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr></tr>
            ) : (
              data?.orders?.map((item) => (
                <tr
                  key={item?._id}
                  className="border-b border-gray-1 hover:bg-base-2 hover:bg-opacity-25 cursor-default duration-300"
                >
                  <td className="px-4 py-2">#{item?.transactionId}</td>
                  <td className="px-4 py-2">{item?.course?.name}</td>
                  <td className="px-4 py-2">2022-01-01 10:00 AM</td>
                  <td className="px-4 py-2">{item?.status}</td>
                  <td className="px-4 py-2">{item?.paymentMethod}</td>
                  <td className="px-4 py-2">{item?.amount}</td>

                  {authContext.user.role !== "customer" && (
                    <td className="px-4 py-2">{item?.user?.fullName}</td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
