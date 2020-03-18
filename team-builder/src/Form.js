import React, { useState } from "react";

const Form = props => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    role: ""
  });
  console.log(formState);

  const changeHandler = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    props.addTeamMember({
      ...formState,
      id: Date.now()
    });

    setFormState({
      name: "",
      email: "",
      role: ""
    });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={formState.name}
        onChange={changeHandler}
        placeholder="Name"
      />
      <label htmlFor="email">email</label>
      <input
        type="text"
        name="email"
        value={formState.email}
        onChange={changeHandler}
        placeholder="email"
      />
      <label htmlFor="role">Role</label>
      <input
        type="text"
        name="role"
        value={formState.role}
        onChange={changeHandler}
        placeholder="Role"
      />
      <button type="submit">Add Team Member!</button>
    </form>
  );
};

export default Form;
