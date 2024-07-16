"use server";

import { revalidateTag } from "next/cache";
import { z } from "zod";

const schema = z.object({
  url: z.string().startsWith("https://github.com/"),
});

export async function createInvoice(
  formData: FormData
) {
  const rawFormData = Object.fromEntries(formData);
  const validatedFields = schema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return { message: validatedFields.error.flatten().fieldErrors };
  }

  const data = validatedFields.data;

  try {
    revalidateTag("invoice");
    return { message: `Create invoice ${data.url}` };
  } catch (error) {
    return { message: `Create invoice ${error}` };
  }
}
