import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import categoryApiSlice from "../../../../redux/api/categoryApiSlice";
import { deleteCategory } from "../../../../redux/slice/categorySlice";
import toast from "react-hot-toast";
import { ButtonLoader } from "../../../../components/loader/Loader";

const CategoryListItem = ({ item }) => {
  const dispatch = useDispatch();
  const [deleteCategoryHandle, { data, isLoading, isSuccess, isError, error }] =
    categoryApiSlice.useDeleteCategoryMutation();
  const handleDelete = (id) => {
    deleteCategoryHandle(id);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted");
      dispatch(deleteCategory(data?.id));
    }

    if (isError) {
      if (error?.data?.message) {
        toast.error(error?.data?.message);
      }
    }
  }, [isSuccess, isError]);
  return (
    <tr className="border-b border-gray-1 hover:bg-base-2 hover:bg-opacity-25 cursor-default duration-300">
      <td className="px-4 py-2">{item?.name}</td>
      {/* <td className="px-4 py-2">05 courses</td> */}
      <td className="px-4 py-2">admin</td>

      <td className="px-4 py-2 ">
        <div className="flex w-fit flex-wrap items-center gap-x-4">
          <button className="hover:underline">Edit</button>
          <div className="relative overflow-hidden rounded">
            <button
              onClick={() => handleDelete(item?._id)}
              className="bg-red-600 px-2 py-1 text-white rounded cursor-pointer hover:opacity-80 duration-200 active:scale-[0.98]"
            >
              Delete
            </button>
            {isLoading && <ButtonLoader />}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default CategoryListItem;
