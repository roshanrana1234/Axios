import React, { useState, useEffect } from "react";
import axios from "axios";
import Instance from "../Axios/AxiosInstance";
import axiosInstance from "../utils/Axios-utils";
import { Link } from "react-router-dom";
import DeleteModal from "../components/Modals/DeleteModal";

const Crud = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [refetch, setRefetch] = useState(false);
  const [visible, setVisible] = useState(false);
  const [devID, setDevID] = useState("");

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get("http://localhost:8000/developer");
  //         // console.log(response);
  //         setData(response.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchData();
  //   }, []);

  //   2 Hour
  useEffect(() => {
    // Instance.get("/developer");
    // Instance("/developer")
    // Instance({ url: "/developer", method: "get" })
    axiosInstance({ url: "/developer", method: "get" })
      .then((res) => {
        // console.log(res);
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
  }, [refetch]);

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

  //   Form Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, designation };
    axiosInstance({ url: "/developer", method: "post", data: data })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          setRefetch(!refetch);
          setName("");
          setDesignation("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   handle Delete
  const handleDelete = (id) => {
    setVisible(true);
    setDevID(id);
  };

  //   Delete Funtion
  const deleteData = (id) => {
    axiosInstance({ url: `/developer/${id}`, method: "delete" })
      .then((res) => {
        console.log(res);
        setRefetch(!refetch);
        setVisible(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   Close Modal
  const closeModal = () => {
    setVisible(false);
  };
  return (
    <>
      <h1 className="text-xl font-bold text-center">CRUD</h1>
      {/* Form 'POST' */}

      <form
        onSubmit={handleSubmit}
        className="w-10/12 m-auto bg-gray-300 p-4 rounded flex flex-col gap-6"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Enter Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Designation</label>
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          submit
        </button>
      </form>

      {/* Read Data 'GET' */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 rounded p-3">
        {data.map((value, index) => {
          return (
            <div
              key={index}
              className="bg-purple-900 text-white p-4 rounded flex flex-col gap-3"
            >
              <div>
                name : <span>{value.name}</span>
              </div>
              <div>
                Desigantion : <span>{value.designation}</span>
              </div>
              <div className="flex gap-3">
                <Link className="btn bg-blue-500" to={`${value.id}`}>
                  <button>Show Detail</button>
                </Link>
                <button
                  onClick={() => handleDelete(value.id)}
                  className="btn bg-red-500"
                >
                  Delete
                </button>
                <button className="btn bg-blue-800">Edit</button>
              </div>
            </div>
          );
        })}
      </div>
      {/* Delete PopModal 'DELETE' */}
      <DeleteModal
        visible={visible}
        closeModal={closeModal}
        devID={devID}
        deleteData={deleteData}
      />
      {/* Update MOdal 'UPDATE' */}
    </>
  );
};

export default Crud;
