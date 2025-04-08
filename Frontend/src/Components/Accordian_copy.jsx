import React, { useState } from "react";

const Accordian_copy = ({ data }) => {
  const [accOpen, setAccOpen] = useState(null);
  const handleAcc = (id) => {
    setAccOpen(accOpen === id ? null : id);
  };
  return (
    <>
      {data.map((res) => (
        <div key={res.id}>
          <p onClick={() => handleAcc(res.id)}>{res.name}</p>
          {accOpen === res.id && (
            <>
              <img src={res.image_url} alt="" />
              <p>{res.price}</p>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default Accordian_copy;
