import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Base_url } from "../Constant/constant";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [coffee, setCoffee] = useState([]);
  const [values, setValues] = useState({ name: "", price: "", image_url: ""});

  useEffect(() => {
    axios
      .get(`${Base_url}/read/${id}`)
      .then((res) => {
        console.log(res?.data);
        setCoffee(res?.data);
        if (res.data.length > 0) {
          // Ensure data exists before setting values
          setValues({ name: res.data[0].name, price: res.data[0].price , image_url: res.data[0].image_url });
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
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              {/* Section Header */}
              <h2 className="font-semibold text-3xl text-white text-center mb-6">
                Update Coffee
              </h2>

              {/* Form Card */}
              <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-10">
                <div className="grid gap-4 text-sm grid-cols-1 lg:grid-cols-2">
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 text-sm grid-cols-1 md:grid-cols-5">
                      {/* Coffee Name Field */}
                      <div className="md:col-span-5">
                        <label
                          htmlFor="full_name"
                          className="block text-gray-300 font-medium"
                        >
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

                      {/* Price Field */}
                      <div className="md:col-span-5">
                        <label
                          htmlFor="price"
                          className="block text-gray-300 font-medium"
                        >
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
                      {/* Image Field */}
                      <div className="md:col-span-5">
                        <label
                          htmlFor="price"
                          className="block text-gray-300 font-medium"
                        >
                          Image
                        </label>
                        <input
                          type="string"
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
