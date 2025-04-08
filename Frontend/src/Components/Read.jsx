import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Base_url } from "../Constant/constant";

const Read = () => {
  const { id } = useParams();
  const [coffee, setCoffee] = useState([]);
  useEffect(() => {
    axios
      .get(Base_url + "/read/" + id)
      .then((res) => {
        console.log(res.data);
        setCoffee(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="card card-border bg-base-100 w-96">
        <div className="card-body">
          {coffee[0] && (
            <>
              <h2 className="card-title">{coffee[0].name}</h2>
              <p>{coffee[0].price}</p>
              <img src={coffee[0].image_url} alt="" />

              <div className="card-actions justify-end">
                <Link to="/" className="btn btn-primary">
                  Back
                </Link>
                <Link
                  to={`/edit/${coffee[0].id}`}
                  className="btn btn-secondary"
                >
                  Edit
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Read;
