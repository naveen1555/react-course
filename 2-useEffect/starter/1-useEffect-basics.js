import React, { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

const Final = () => {
  const [usersData, setUsersData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });

  const fetchUsersData = async (apiurl) => {
    setLoading(true);
    setIsError({ status: false, msg: "" });
    try {
      const response = await fetch(apiurl);
      const data = await response.json();
      console.log(data);
      setUsersData(data);
      setLoading(false);
      setIsError({ status: false, msg: "" });
      if (response.status === 404) {
        throw new Error("data not found");
      }
    } catch (error) {
      setLoading(false);
      setIsError({
        status: true,
        msg: error.message || "something went wrong,please try again!",
      });
    }
  };

  useEffect(() => {
    fetchUsersData(url);
  }, []);

  if (Loading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  if (isError?.status) {
    return (
      <div>
        <h3 style={{ color: "red" }}>{isError?.msg}</h3>
      </div>
    );
  }

  return (
    <div>
      <h1>useEffect example-1</h1>
      <ul>
        {usersData.map((eachUser) => {
          const { id, name, email } = eachUser;
          return (
            <li key={id}>
              <div>{name}</div>
              <div>{email}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Final;
