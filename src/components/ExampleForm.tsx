"use client";

import { error } from "console";
import { FieldValues, useForm } from "react-hook-form";

const Button = ({ label, disabled }: { label: string; disabled?: boolean }) => {
  return (
    <button type="submit" disabled={disabled}>
      {label}
    </button>
  );
};

export const ExampleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    // wait 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="url"
        id="githubURL"
        {...register("githubURL", { required: "Github URL is required" })}
      />
      {errors.githubURL === "url" && (
        <p className="text-red-500">{errors.root.message}</p>
      )}
      <Button label="Submit" disabled={isSubmitting} />
    </form>
  );
};
