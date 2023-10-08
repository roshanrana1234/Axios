import React, { useState, useEffect } from "react";
import { useNavigate, useNavigationType, useParams } from "react-router-dom";
import axiosInstance from "../utils/Axios-utils";

const DeveloperDetail = () => {
  const navigate = useNavigate();
  const { devID } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    axiosInstance({ url: `/developer/${devID}`, method: "get" })
      .then((res) => {
        console.log(res);
        setData(res.data);
        setData(res.data);
        setIsLoading(false);
        setIsError(null);
      })

      .catch((err) => {
        console.log(err);
        setIsError(err.message);
        setIsLoading(false);
        setData(null);
      });
  }, []);

  const handleDelete = (id) => {
    axiosInstance({ url: `/developer/${id}`, method: "delete" })
      .then((res) => {
        console.log(res);
        navigate("/crud");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isLoading) {
    return (
      <div className="h-[90vh] bg-green-500 text-4xl font-bold flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-[90vh] bg-red-500 text-4xl font-bold flex justify-center items-center">
        {isError}
      </div>
    );
  }

  return (
    <>
      <div>
        <h1 className="text-center text-3xl py-5">Detail</h1>

        <div className="flex flex-col w-7/12 m-auto bg-purple-900 text-white p-4 rounded items-center gap-5">
          <span>{data.name}</span>
          <span>{data.designation}</span>
          <button onClick={() => handleDelete(devID)} className="btn">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default DeveloperDetail;
