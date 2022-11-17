import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "DELETE_PERSON") {
    const newPersons = state.data.filter((eachPerson) => {
      return eachPerson.id !== action.payload;
    });
    console.log(newPersons);
    return {
      ...state,
      data: newPersons,
      length: state.length - 1,
    };
  }
  return state;
};

const Final = () => {
  const intialState = {
    data: [
      { id: 1, firstname: "naveen", email: "naveen@gmail.com" },
      { id: 2, firstname: "emma", email: "emma@gmail.com" },
    ],
    length: 2,
  };
  const [state, dispatch] = useReducer(reducer, intialState);

  const handleDelete = (id) => {
    console.log(id);
    dispatch({
      type: "DELETE_PERSON",
      payload: id,
    });
  };

  const handleEdit = (id) => {
    dispatch({
      type: "UPDATE_PERSON",
      payload: id,
    });
  };

  return (
    <div>
      <h1>Current users length :{state.length}</h1>
      {state.data.map((eachitem) => {
        const { id, firstname, email } = eachitem;
        return (
          <div key={id}>
            <h3>{firstname}</h3>
            <h1>{email}</h1>
            <button onClick={() => handleDelete(id)}>delete</button>
            <button onClick={() => handleEdit(id)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default Final;
