"use server";

export async function printTextAction(prevState: any, formData: FormData) {
  const text = formData.get("text");
  console.log(text);

  // Here you can handle validation and other logic
  let errors = {};
  if (!text) {
    errors = { text: "Text is required" };
  }

  return {
    values: { ...prevState.values, text },
    errors,
  };
}
