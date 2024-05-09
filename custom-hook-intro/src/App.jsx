import React from "react";
import useFormState from "./Hooks/useForm";

const MyFormComponent = () => {
  const { values, handleChange, resetForm } = useFormState({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    resetForm();
  };

  console.log(values);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={values.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyFormComponent;
