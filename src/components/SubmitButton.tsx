"use client";

import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  console.log(pending);

  return (
    <button type="submit" disabled={pending}>
      Submit
    </button>
  );
};
