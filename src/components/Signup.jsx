import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("password")); // watch input value by passing the name of it
  console.log(errors); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-2"
    >
      {/* register your input into the hook by invoking the "register" function */}
      <input
        {...register("Email", { required: true })}
        placeholder="Email"
        className="border-2"
      />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        {...register("password", { required: true })}
        placeholder="Password"
        className="border-2"
      />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input
        type="submit"
        value="Sign Up"
        className="cursor-pointer border-2 p-2"
      />
    </form>
  );
};

export default Signup;
