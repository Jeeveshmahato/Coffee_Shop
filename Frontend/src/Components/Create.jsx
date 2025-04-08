import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Base_url } from "../Constant/constant";

const CreateCoffee = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: "", price: "", image_url: "" });

  const handleCreate = () => {
    axios
      .post(`${Base_url}/coffee`, values)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          {/* Header */}
          <h2 className="text-3xl font-semibold text-white text-center mb-6">
            Create New Coffee Item
          </h2>

          {/* Form Card */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-10">
            <div className="grid gap-4 text-sm grid-cols-1 lg:grid-cols-2">
              <div className="lg:col-span-2">
                <div className="grid gap-4 text-sm grid-cols-1 md:grid-cols-5">
                  
                  {/* Coffee Name */}
                  <div className="md:col-span-5">
                    <label className="block text-gray-300 font-medium">
                      Coffee Name
                    </label>
                    <input
                      type="text"
                      name="Coffee_name"
                      className="h-10 border border-gray-600 mt-1 rounded px-4 w-full bg-gray-700 text-white"
                      value={values.name}
                      onChange={(e) =>
                        setValues({ ...values, name: e.target.value })
                      }
                    />
                  </div>

                  {/* Price */}
                  <div className="md:col-span-5">
                    <label className="block text-gray-300 font-medium">
                      Price
                    </label>
                    <input
                      type="number"
                      name="Price"
                      className="h-10 border border-gray-600 mt-1 rounded px-4 w-full bg-gray-700 text-white"
                      value={values.price}
                      onChange={(e) =>
                        setValues({ ...values, price: e.target.value })
                      }
                    />
                  </div>

                  {/* Image URL */}
                  <div className="md:col-span-5">
                    <label className="block text-gray-300 font-medium">
                      Image URL
                    </label>
                    <input
                      type="text"
                      name="Image"
                      className="h-10 border border-gray-600 mt-1 rounded px-4 w-full bg-gray-700 text-white"
                      value={values.image_url}
                      onChange={(e) =>
                        setValues({ ...values, image_url: e.target.value })
                      }
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="md:col-span-5 text-right">
                    <button
                      onClick={handleCreate}
                      className="px-6 py-3 bg-amber-500 text-white font-bold rounded-lg shadow-lg hover:bg-amber-600 transition"
                    >
                      Create Coffee
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCoffee;