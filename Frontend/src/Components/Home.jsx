import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Base_url } from "../Constant/constant";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import CoffeeInfo from "./CoffeeInfo";
import SpecialOffers from "./SpecialOffer";
import ContactLocation from "./ContactLocation";
import Accordion from "./Accordain";
import Accordian_copy from "./Accordian_copy";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(Base_url)
      .then((res) => {
        setData(res?.data);
        console.log(res?.data);
      })
      .catch((err) => console.error(err));
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`${Base_url}/delete/${id}`)
      .then((res) => {
        location.reload();
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <Hero />
          {/* Table Section */}

          <div className="overflow-x-auto mt-10 rounded-lg shadow-lg bg-gray-800">
            <table className="w-full text-left border-collapse overflow-auto">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="p-4">ID</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Image</th>

                  <th className="p-4">Price</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <>
                    <tr key={item.id} className="border-t border-gray-700">
                      <td className="p-4">{item.id}</td>
                      <td className="p-4">{item.name}</td>
                      <td className="p-4">
                        <img
                          className="w-[120px] h-[120px] "
                          src={item.image_url}
                          alt=""
                        />
                      </td>
                      <td className="p-4">₹{item.price}</td>
                      <td className="p-4 flex gap-2 items-center h-full justify-center">
                        <Link
                          to={`/read/${item.id}`}
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                          Read
                        </Link>
                        <Link
                          to={`/edit/${item.id}`}
                          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <Accordion data={data} />
          <Accordian_copy data={data} />
          <div className="flex justify-end items-center my-6">
            <Link
              to="/create"
              className="px-6 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition"
            >
              Add New
            </Link>
          </div>
          <SpecialOffers />
          <CoffeeInfo />
          <Testimonials />
          <ContactLocation />
        </div>
      </div>
    </>
  );
};

export default Home;
