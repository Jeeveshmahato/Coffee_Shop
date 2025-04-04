import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Base_url } from "../Constant/constant";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [coffee, setCoffee] = useState([]);
  const [values, setValues] = useState({ name: "", price: "" });

  useEffect(() => {
    axios
      .get(`${Base_url}/read/${id}`)
      .then((res) => {
        console.log(res?.data);
        setCoffee(res?.data);
        if (res.data.length > 0) {
          // Ensure data exists before setting values
          setValues({ name: res.data[0].name, price: res.data[0].price });
        }
      })
      .catch((err) => console.log(err));
  }, [id]);
  const handleUpdate = () => {
    axios
      .put(`${Base_url}/edit/${id}`, values)
      .then((res) => {
        console.log(res?.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {values.name && values.price && (
        // <div class="min-h-screen text-black p-6 bg-gray-100 flex items-center justify-center">
        //   <div class="container max-w-screen-lg mx-auto">
        //     <div>
        //       <h2 class="font-semibold text-xl text-gray-600">Update Coffee</h2>

        //       <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        //         <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                 

        //           <div class="lg:col-span-2">
        //             <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
        //               <div class="md:col-span-5">
        //                 <label for="full_name">Full Name</label>
        //                 <input
        //                   type="text"
        //                   name="Coffee_name"
        //                   class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
        //                   value={values.name}
        //                   onChange={(e) =>
        //                     setValues({ ...values, name: e.target.value })
        //                   }
        //                 />
        //               </div>

        //               <div class="md:col-span-5">
        //                 <label for="email">Email Address</label>
        //                 <input
        //                   type="number"
        //                   name="Price"
        //                   class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
        //                   value={values.price}
        //                   onChange={(e) =>
        //                     setValues({ ...values, price: e.target.value })
        //                   }
        //                 />
        //               </div>

        //               <div class="md:col-span-5 text-right">
        //                 <div class="inline-flex items-end">
        //                   <button
        //                     onClick={handleUpdate}
        //                     class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        //                   >
        //                     Update
        //                   </button>
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
  <div className="container max-w-screen-lg mx-auto">
    <div>
      {/* Section Header */}
      <h2 className="font-semibold text-3xl text-white text-center mb-6">Update Coffee</h2>

      {/* Form Card */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-10">
        <div className="grid gap-4 text-sm grid-cols-1 lg:grid-cols-2">

          <div className="lg:col-span-2">
            <div className="grid gap-4 text-sm grid-cols-1 md:grid-cols-5">
              
              {/* Coffee Name Field */}
              <div className="md:col-span-5">
                <label htmlFor="full_name" className="block text-gray-300 font-medium">Coffee Name</label>
                <input
                  type="text"
                  name="Coffee_name"
                  className="h-10 border border-gray-600 mt-1 rounded px-4 w-full bg-gray-700 text-white"
                  value={values.name}
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
                />
              </div>

              {/* Price Field */}
              <div className="md:col-span-5">
                <label htmlFor="price" className="block text-gray-300 font-medium">Price</label>
                <input
                  type="number"
                  name="Price"
                  className="h-10 border border-gray-600 mt-1 rounded px-4 w-full bg-gray-700 text-white"
                  value={values.price}
                  onChange={(e) => setValues({ ...values, price: e.target.value })}
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button
                    onClick={handleUpdate}
                    className="px-6 py-3 bg-amber-500 text-white font-bold rounded-lg shadow-lg hover:bg-amber-600 transition"
                  >
                    Update
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      )}
    </>
  );
};

export default Update;
