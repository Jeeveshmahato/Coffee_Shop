import React, { useState } from "react";

const Accordion = ({ data }) => {
  const [openId, setOpenId] = useState(null);

  const handleAcc = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      {data.map((res) => (
        <div key={res.id} className="border-b border-gray-600 p-4">
          <p
            onClick={() => handleAcc(res.id)}
            className="cursor-pointer font-bold text-lg text-white bg-gray-800 p-2 rounded"
          >
            {res.name}
          </p>

          {openId === res.id && (
            <div className="mt-2 p-3 bg-gray-700 rounded-lg text-white">
              <img
                src={res.image_url}
                alt={res.name}
                className="w-40 h-40 object-cover rounded-lg"
              />
              <p className="mt-2">Price: {res.price}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
