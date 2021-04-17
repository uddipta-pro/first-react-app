import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const { value, name } = event.target;

    setFullName((prevalue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: prevalue.lname,
        };
      } else if (name === "lname") {
        return {
          fname: prevalue.fname,
          lname: value,
        };
      }
    });
  };

  const onSubmits = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmits}>
        <h1>
          Hello {fullName.fname} {fullName.lname}
        </h1>

        <input
          type="text"
          placeholder="Enter your first name"
          name="fname"
          onChange={inputEvent}
          value={fullName.fname}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter your last name"
          name="lname"
          onChange={inputEvent}
          value={fullName.lname}
        />
        <br />
        <br />
      </form>
    </>
  );
};
export default App;
