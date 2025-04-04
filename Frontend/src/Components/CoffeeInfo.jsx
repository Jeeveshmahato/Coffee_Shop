import axios from "axios";
import { useEffect, useState } from "react";
import { Base_url } from "../Constant/constant";

const CoffeeInfo = () => {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    axios.get(`${Base_url}/coffee-info`)
      .then((res) => setCoffeeData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">The Art of Coffee</h2>

        {/* Dynamically Render Coffee Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {coffeeData.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <img 
                src={item.image_url} 
                alt={item.name} 
                className="rounded-lg shadow-lg w-full md:w-3/4"
              />
              <h3 className="text-2xl font-semibold mt-4">{item.name}</h3>
              <p className="text-gray-300 text-center mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoffeeInfo;